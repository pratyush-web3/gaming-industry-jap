"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { GAMES } from "@/data/site";
import { Play, Monitor } from "lucide-react";

export default function Games() {
  return (
    <SiteShell>
      <PageHeader
        kicker="ゲーム作品 — ゲーム作品"
        title="5つの世界、それぞれの物語。"
        jp="原作IPを中心に、コンソール・PCで展開する作品群。"
        subtitle="一作ごとに違うジャンル、違う美学、違う問いかけ。しかし全てに共通するのは、プレイヤーの心に残る世界をつくるという信念です。"
      />

      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="space-y-32">
          {GAMES.map((g, i) => (
            <article key={g.slug} className="relative">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)]">
                    <img src={g.image} alt={g.title} className="h-full w-full object-cover" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${g.color} opacity-25 mix-blend-overlay`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent" />
                    <button className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full border border-foreground/50 bg-[color-mix(in_oklab,var(--background)_50%,transparent)] backdrop-blur transition hover:bg-[color-mix(in_oklab,var(--accent-cyan)_30%,transparent)]">
                      <Play size={20} className="ml-1 text-foreground" />
                    </button>
                    <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                      トレーラー · {g.year}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
                    {String(i + 1).padStart(2, "0")} · {g.genre}
                  </div>
                  <h2 className="mt-4 font-display text-5xl font-black leading-[1.05] md:text-6xl">
                    {g.title}
                  </h2>
                  <div className="mt-3 font-serif-jp text-lg text-[var(--text-muted)]">
                    {g.tagline}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {g.platforms.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
                      >
                        <Monitor size={10} /> {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 space-y-5 text-sm leading-loose text-[var(--text-muted)]">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                        物語
                      </div>
                      <p className="mt-2">{g.story}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                        世界
                      </div>
                      <p className="mt-2">{g.world}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                        ゲームプレイ
                      </div>
                      <p className="mt-2">{g.gameplay}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2 md:grid-cols-2">
                    {g.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] p-3 text-xs text-[var(--text-muted)]"
                      >
                        <span className="mt-1 h-1 w-1 rounded-full bg-[var(--accent-cyan)]" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {g.characters.map((c) => (
                  <div key={c.name} className="card-surface rounded-sm p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                      {c.role}
                    </div>
                    <div className="mt-2 font-display text-lg font-bold">{c.name}</div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{c.bio}</p>
                  </div>
                ))}
              </div>

              <div className="divider-glyph mt-20" />
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
