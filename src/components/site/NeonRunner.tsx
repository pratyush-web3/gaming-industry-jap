"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Gamepad2, RotateCcw, Trophy } from "lucide-react";

// ネオンランナー — Cyberpunk endless runner mini-game
// Controls: Space / ↑ / Tap to jump, ↓ to slide, mobile tap = jump

type Obstacle = { x: number; w: number; h: number; type: "low" | "high" };
type Crystal = { x: number; y: number; r: number; collected: boolean };

const STORAGE_KEY = "neon-runner-highscore";

export function NeonRunner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);

  // mutable state in refs so the rAF loop is stable
  const state = useRef({
    runnerY: 0,
    vy: 0,
    sliding: false,
    obstacles: [] as Obstacle[],
    crystals: [] as Crystal[],
    spawnTimer: 0,
    crystalTimer: 0,
    speed: 5,
    elapsed: 0,
    score: 0,
    over: false,
    width: 800,
    height: 260,
  });

  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (saved) setHigh(saved);
  }, []);

  const reset = useCallback(() => {
    const c = canvasRef.current;
    const w = c?.clientWidth ?? 800;
    const h = c?.clientHeight ?? 260;
    state.current = {
      runnerY: 0,
      vy: 0,
      sliding: false,
      obstacles: [],
      crystals: [],
      spawnTimer: 60,
      crystalTimer: 90,
      speed: 5,
      elapsed: 0,
      score: 0,
      over: false,
      width: w,
      height: h,
    };
    setScore(0);
    setOver(false);
  }, []);

  const start = useCallback(() => {
    reset();

    state.current.over = false;

    setScore(0);
    setOver(false);

    setRunning(false);

    requestAnimationFrame(() => {
      setRunning(true);
    });
  }, [reset]);

  const jump = useCallback(() => {
    const s = state.current;
    if (s.over) return;
    if (s.runnerY <= 0.5) s.vy = -13;
  }, []);

  const slide = useCallback((on: boolean) => {
    state.current.sliding = on;
  }, []);

  // input
  useEffect(() => {
    if (!running) return;
    const kd = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
        e.preventDefault();
        jump();
      }
      if (e.code === "ArrowDown" || e.code === "KeyS") {
        e.preventDefault();
        slide(true);
      }
    };
    const ku = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown" || e.code === "KeyS") slide(false);
    };
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    return () => {
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
    };
  }, [running, jump, slide]);

  // resize observer
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      const w = c.clientWidth;
      const h = c.clientHeight;

      c.width = w * dpr;
      c.height = h * dpr;

      state.current.width = w;
      state.current.height = h;

      const ctx = c.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const ro = new ResizeObserver(resize);

    ro.observe(c);

    return () => ro.disconnect();
  }, []);

  // game loop
  useEffect(() => {
    if (!running) return;
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(2, (now - last) / 16.667);
      last = now;
      const s = state.current;
      const W = s.width,
        H = s.height;
      const groundY = H - 36;
      const runnerX = 70;
      const runnerW = 30;
      const runnerH = s.sliding ? 26 : 46;

      if (!s.over) {
        s.elapsed += dt;
        s.speed = 5 + Math.min(7, s.elapsed / 240);
        s.score += dt * 0.6;
        setScore(Math.floor(s.score));

        // physics
        s.vy += 0.7 * dt;
        s.runnerY += s.vy * dt;
        if (s.runnerY > 0) {
          s.runnerY = 0;
          s.vy = 0;
        }

        // spawn obstacles
        s.spawnTimer -= dt;
        if (s.spawnTimer <= 0) {
          const high = Math.random() < 0.25;
          s.obstacles.push({
            x: W + 20,
            w: high ? 36 : 22 + Math.random() * 24,
            h: high ? 22 : 28 + Math.random() * 22,
            type: high ? "high" : "low",
          });
          s.spawnTimer = 55 + Math.random() * 60 - Math.min(30, s.elapsed / 30);
        }
        // crystals
        s.crystalTimer -= dt;
        if (s.crystalTimer <= 0) {
          s.crystals.push({
            x: W + 20,
            y: groundY - 60 - Math.random() * 60,
            r: 8,
            collected: false,
          });
          s.crystalTimer = 90 + Math.random() * 90;
        }

        // move
        s.obstacles.forEach((o) => (o.x -= s.speed * dt));
        s.crystals.forEach((cr) => (cr.x -= s.speed * dt));
        s.obstacles = s.obstacles.filter((o) => o.x + o.w > -10);
        s.crystals = s.crystals.filter((cr) => cr.x > -10 && !cr.collected);

        // collisions
        const runnerTop = groundY - runnerH + s.runnerY;
        const runnerBottom = groundY + s.runnerY;
        for (const o of s.obstacles) {
          const oy = o.type === "high" ? groundY - 50 : groundY - o.h;
          const ob = oy + o.h;
          if (
            runnerX + runnerW > o.x &&
            runnerX < o.x + o.w &&
            runnerBottom > oy &&
            runnerTop < ob
          ) {
            s.over = true;

            setOver(true);
            setRunning(false);

            const final = Math.floor(s.score);
            setHigh((h) => {
              const nh = Math.max(h, final);
              localStorage.setItem(STORAGE_KEY, String(nh));
              return nh;
            });
            break;
          }
        }
        for (const cr of s.crystals) {
          const dx = runnerX + runnerW / 2 - cr.x;
          const dy = groundY - runnerH / 2 + s.runnerY - cr.y;
          if (dx * dx + dy * dy < (cr.r + 20) * (cr.r + 20)) {
            cr.collected = true;
            s.score += 25;
          }
        }
      }

      // === RENDER ===
      ctx.clearRect(0, 0, W, H);
      // sky gradient
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#1a0a2e");
      grad.addColorStop(0.6, "#2d1b4e");
      grad.addColorStop(1, "#0a0a1a");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // distant mountains
      ctx.fillStyle = "rgba(123, 97, 255, 0.35)";
      const mOff = (s.elapsed * 0.5) % 200;
      ctx.beginPath();
      ctx.moveTo(-mOff, H);
      for (let i = 0; i < 10; i++) {
        const x = i * 100 - mOff;
        ctx.lineTo(x + 50, H - 90 - (i % 3) * 20);
        ctx.lineTo(x + 100, H);
      }
      ctx.fill();

      // city silhouette
      ctx.fillStyle = "rgba(255, 79, 216, 0.35)";
      const bOff = (s.elapsed * 1.2) % 60;
      for (let i = 0; i < 30; i++) {
        const x = i * 60 - bOff;
        const bh = 40 + ((i * 37) % 70);
        ctx.fillRect(x, H - 60 - bh, 44, bh);
        // windows
        ctx.fillStyle = "rgba(0, 212, 255, 0.7)";
        for (let wy = H - 60 - bh + 8; wy < H - 60; wy += 8) {
          for (let wx = x + 4; wx < x + 40; wx += 8) {
            if ((wx * wy + i) % 5 === 0) ctx.fillRect(wx, wy, 3, 3);
          }
        }
        ctx.fillStyle = "rgba(255, 79, 216, 0.35)";
      }

      // ground
      ctx.fillStyle = "#0d0517";
      ctx.fillRect(0, groundY, W, H - groundY);
      // grid lines (perspective)
      ctx.strokeStyle = "rgba(0, 212, 255, 0.5)";
      ctx.lineWidth = 1;
      const gOff = (s.elapsed * s.speed) % 40;
      for (let i = 0; i < 20; i++) {
        const x = i * 40 - gOff;
        ctx.beginPath();
        ctx.moveTo(x, groundY);
        ctx.lineTo(x - 80, H);
        ctx.stroke();
      }
      for (let i = 0; i < 6; i++) {
        const y = groundY + (i * (H - groundY)) / 6;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      // horizon line
      ctx.strokeStyle = "#FF4FD8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(W, groundY);
      ctx.stroke();

      // obstacles
      for (const o of s.obstacles) {
        const oy = o.type === "high" ? groundY - 50 : groundY - o.h;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#FF4FD8";
        ctx.fillStyle = o.type === "high" ? "#ff2bd1" : "#ff5a5a";
        ctx.fillRect(o.x, oy, o.w, o.h);
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.strokeRect(o.x + 0.5, oy + 0.5, o.w - 1, o.h - 1);
      }

      // crystals
      for (const cr of s.crystals) {
        ctx.save();
        ctx.translate(cr.x, cr.y + Math.sin(s.elapsed * 0.1 + cr.x) * 3);
        ctx.rotate(s.elapsed * 0.05);
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#34F5C5";
        ctx.fillStyle = "#34F5C5";
        ctx.beginPath();
        ctx.moveTo(0, -cr.r);
        ctx.lineTo(cr.r, 0);
        ctx.lineTo(0, cr.r);
        ctx.lineTo(-cr.r, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // runner
      const rx = runnerX,
        ry = groundY - runnerH + s.runnerY;
      ctx.shadowBlur = 16;
      ctx.shadowColor = "#00D4FF";
      ctx.fillStyle = "#00D4FF";
      ctx.fillRect(rx, ry, runnerW, runnerH);
      ctx.shadowBlur = 0;
      // helmet visor
      ctx.fillStyle = "#FF4FD8";
      ctx.fillRect(rx + 4, ry + 6, runnerW - 8, 6);
      // trail
      ctx.fillStyle = "rgba(0, 212, 255, 0.25)";
      for (let i = 1; i < 5; i++) {
        ctx.fillRect(rx - i * 8, ry + 4, runnerW - i * 3, runnerH - 8);
      }

      // HUD
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, W, 26);
      ctx.fillStyle = "#34F5C5";
      ctx.font = "bold 12px ui-monospace, monospace";
      ctx.fillText(`スコア  ${String(Math.floor(s.score)).padStart(6, "0")}`, 12, 17);
      ctx.fillStyle = "#00D4FF";
      ctx.fillText(`最高  ${String(high).padStart(6, "0")}`, W - 130, 17);
      ctx.fillStyle = "#FF4FD8";
      ctx.fillText(`速度  ${s.speed.toFixed(1)}`, W / 2 - 30, 17);

      if (!s.over) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running, high]);

  return (
    <div ref={containerRef} className="card-surface relative overflow-hidden rounded-sm">
      <div className="flex items-center justify-between border-b border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] bg-[color-mix(in_oklab,var(--surface-2)_60%,transparent)] px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2 w-2 animate-pulse-ring rounded-full bg-[var(--accent-glow)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
            アーケード · ネオンランナー
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
          <span className="hidden sm:inline">スペース / タップ = ジャンプ</span>
          <span className="hidden sm:inline">↓ = スライド</span>
          <span className="inline-flex items-center gap-1 text-[var(--accent-glow)]">
            <Trophy size={11} /> {high}
          </span>
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          className="block h-[280px] w-full touch-none select-none md:h-[340px]"
          onPointerDown={(e) => {
            e.preventDefault();
            if (!running) start();
            else jump();
          }}
        />
        {/* scanlines overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* Start screen */}
        {!running && (
          <div className="absolute inset-0 grid place-items-center bg-[color-mix(in_oklab,var(--background)_70%,transparent)] backdrop-blur-sm">
            <div className="text-center">
              <Gamepad2 size={36} className="mx-auto text-[var(--accent-cyan)]" />
              <div className="mt-4 font-display text-3xl font-black md:text-5xl">
                <span className="text-gradient">ネオン</span>ランナー
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                ネオンランナー · 東京 2099
              </div>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-loose text-[var(--text-muted)]">
                ネオンの霧に沈む新東京帝都。障害物を躱し、〈エナジー結晶〉を集めてハイスコアを目指せ。
              </p>
              <button
                onClick={start}
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[var(--accent-cyan)] px-7 py-3 text-sm font-bold uppercase tracking-[0.3em] text-background transition hover:bg-[var(--accent-glow)]"
              >
                ▶ ゲームスタート
              </button>
            </div>
          </div>
        )}

        {/* Game Over */}
        {over && (
          <div className="absolute inset-0 grid place-items-center bg-[color-mix(in_oklab,var(--background)_75%,transparent)] backdrop-blur-sm">
            <div className="text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-[var(--accent-magenta)]">
                システム障害
              </div>
              <div className="mt-3 font-display text-4xl font-black md:text-6xl text-gradient">
                ゲームオーバー
              </div>
              <div className="mt-5 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-[0.3em]">
                <div>
                  <div className="text-[var(--text-muted)]">スコア</div>
                  <div className="mt-1 font-display text-2xl text-[var(--accent-cyan)]">
                    {score}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-muted)]">ベスト</div>
                  <div className="mt-1 font-display text-2xl text-[var(--accent-glow)]">{high}</div>
                </div>
              </div>
              <button
                onClick={start}
                className="mt-6 inline-flex items-center gap-2 rounded-sm border border-[var(--accent-cyan)] bg-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] text-foreground transition hover:bg-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)]"
              >
                <RotateCcw size={14} /> リトライ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
