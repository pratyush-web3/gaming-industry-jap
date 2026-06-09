"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { NEWS } from "@/data/site";
import { useState } from "react";

const CATS = ["すべて", ...Array.from(new Set(NEWS.map((n) => n.category)))];

export default function News() {
  const [cat, setCat] = useState("すべて");
  const filtered = cat === "すべて" ? NEWS : NEWS.filter((n) => n.category === cat);

  return (
    <SiteShell>
      <PageHeader
        kicker="お知らせ — お知らせ"
        title="スタジオの今を、最初にお届け。"
        jp="2014年からの歩みを、一覧でご覧いただけます。"
      />
      <section className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] transition ${
                cat === c
                  ? "border-[var(--accent-cyan)] bg-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] text-foreground"
                  : "border-[color-mix(in_oklab,var(--accent-cyan)_20%,transparent)] text-[var(--text-muted)] hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="card-surface overflow-hidden rounded-sm">
          {filtered.map((n, i) => (
            <article
              key={n.title}
              className={`group grid cursor-pointer gap-4 p-6 transition-colors hover:bg-[color-mix(in_oklab,var(--accent-cyan)_6%,transparent)] md:grid-cols-12 ${
                i !== filtered.length - 1
                  ? "border-b border-[color-mix(in_oklab,var(--accent-cyan)_10%,transparent)]"
                  : ""
              }`}
            >
              <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                {n.date}
              </div>
              <div className="md:col-span-2">
                <span className="rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_30%,transparent)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                  {n.category}
                </span>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-lg font-bold leading-snug group-hover:text-[var(--accent-cyan)]">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{n.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
