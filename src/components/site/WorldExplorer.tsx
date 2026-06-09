"use client";

import { useState } from "react";
import { WORLD_REGIONS } from "@/data/site";
import { MapPin, Users, Cloud, Building2, Compass } from "lucide-react";

export function WorldExplorer() {
  const [active, setActive] = useState(WORLD_REGIONS[0].id);
  const region = WORLD_REGIONS.find((r) => r.id === active) ?? WORLD_REGIONS[0];

  return (
    <div className="card-surface overflow-hidden rounded-sm">
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Region list */}
        <aside className="border-b border-[color-mix(in_oklab,var(--accent-cyan)_18%,transparent)] bg-[color-mix(in_oklab,var(--surface-2)_50%,transparent)] lg:border-b-0 lg:border-r">
          <div className="px-5 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            REGIONS · 領域
          </div>
          <ul className="p-3">
            {WORLD_REGIONS.map((r, i) => {
              const isActive = r.id === active;
              return (
                <li key={r.id}>
                  <button
                    onClick={() => setActive(r.id)}
                    className={`group flex w-full items-center gap-4 rounded-sm border px-3 py-3 text-left transition ${
                      isActive
                        ? "border-[var(--accent-cyan)] bg-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)]"
                        : "border-transparent hover:border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] hover:bg-[color-mix(in_oklab,var(--surface-2)_70%,transparent)]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.3em] ${isActive ? "text-[var(--accent-cyan)]" : "text-[var(--text-muted)]"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-sm font-bold leading-tight">
                        {r.name}
                      </span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                        {r.reading}
                      </span>
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-glow)] glow-cyan" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] px-5 py-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.25em] text-[var(--text-muted)]">
            <Compass size={12} className="mb-2 text-[var(--accent-cyan)]" />
            『星影クロニクル』
            <br />
            公式設定資料より抜粋
          </div>
        </aside>

        {/* Detail panel */}
        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/8]">
            <img
              key={region.id}
              src={region.image}
              alt={region.name}
              className="absolute inset-0 h-full w-full animate-fade-in object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-40 mix-blend-overlay`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[color-mix(in_oklab,var(--surface)_40%,transparent)] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-[color-mix(in_oklab,var(--accent-cyan)_30%,transparent)] to-transparent" />

            {/* HUD coords */}
            <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
              LAT {(Math.abs(region.id.charCodeAt(0)) % 90).toFixed(3)}° · LON{" "}
              {((region.id.charCodeAt(1) ?? 65) % 180).toFixed(3)}°
            </div>
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((c) => (
              <div key={c} className={`absolute ${c} h-4 w-4 border-[var(--accent-cyan)]`} />
            ))}

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                REGION FILE · {region.reading}
              </div>
              <div
                key={region.name}
                className="mt-2 animate-fade-in font-display text-3xl font-black md:text-5xl"
              >
                {region.name}
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-5 md:p-8">
            <div className="md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                LORE · 伝承
              </div>
              <p
                key={region.lore}
                className="mt-3 animate-fade-in font-serif-jp text-base leading-loose text-foreground/90"
              >
                {region.lore}
              </p>
              <div className="mt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                  LANDMARKS · 名所
                </div>
                <ul className="mt-3 space-y-2">
                  {region.landmarks.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                      <span className="mt-2 h-1 w-3 bg-[var(--accent-magenta)]" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <Stat icon={Cloud} label="気候" value={region.climate} />
              <Stat icon={Users} label="人口" value={region.population} />
              <Stat icon={Building2} label="首都" value={region.capital} />
              <Stat icon={MapPin} label="主要勢力" value={region.faction} accent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-sm border p-4 ${
        accent
          ? "border-[var(--accent-magenta)] bg-[color-mix(in_oklab,var(--accent-magenta)_10%,transparent)]"
          : "border-[color-mix(in_oklab,var(--accent-cyan)_20%,transparent)] bg-[color-mix(in_oklab,var(--surface-2)_45%,transparent)]"
      }`}
    >
      <Icon
        size={14}
        className={`mt-1 ${accent ? "text-[var(--accent-magenta)]" : "text-[var(--accent-cyan)]"}`}
      />
      <div className="min-w-0">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
          {label}
        </div>
        <div className="mt-1 font-display text-sm font-bold leading-snug">{value}</div>
      </div>
    </div>
  );
}
