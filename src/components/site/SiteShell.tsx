"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_60%,transparent)] rotate-45 transition-transform group-hover:rotate-[135deg]" />
        <div className="absolute inset-1 rounded-sm bg-[color-mix(in_oklab,var(--accent-violet)_30%,transparent)] rotate-45" />
        <div className="absolute inset-0 grid place-items-center font-display text-sm font-black text-foreground">
          幻
        </div>
      </div>
      <div className={size === "md" ? "leading-tight" : "leading-tight text-sm"}>
        <div className="font-display text-base font-black tracking-tight">幻界創造スタジオ</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
          幻界 · 創造
        </div>
      </div>
    </Link>
  );
}

function TopNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[color-mix(in_oklab,var(--accent-cyan)_10%,transparent)] bg-[color-mix(in_oklab,var(--background)_75%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-foreground" : "text-[var(--text-muted)] hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_50%,transparent)] bg-[color-mix(in_oklab,var(--accent-cyan)_8%,transparent)] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[var(--accent-cyan)] transition-all hover:bg-[color-mix(in_oklab,var(--accent-cyan)_20%,transparent)]"
            >
              依頼相談
            </Link>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_30%,transparent)] p-2 text-foreground"
            aria-label="メニュー"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-[color-mix(in_oklab,var(--accent-cyan)_10%,transparent)] bg-[var(--background)] lg:hidden">
            <div className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-[color-mix(in_oklab,var(--accent-cyan)_8%,transparent)] py-3 text-sm text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] bg-[var(--surface)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent" />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-loose text-[var(--text-muted)]">
            記憶に残る世界を創り、人々の感情を動かす。
            <br />
            幻界創造スタジオは、東京を拠点に独自IPの物語体験を届けるゲーム開発スタジオです。
          </p>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            設立 2014年 · 東京、日本
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            サイトマップ
          </div>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className="text-[var(--text-muted)] transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            法務
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-[var(--text-muted)] hover:text-foreground">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-[var(--text-muted)] hover:text-foreground">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-[var(--text-muted)] hover:text-foreground">
                採用情報
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--text-muted)] hover:text-foreground">
                取材依頼
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            本社
          </div>
          <address className="space-y-2 text-sm not-italic text-[var(--text-muted)]">
            <div>〒150-0002 東京都渋谷区渋谷三丁目12番18号 幻界ビル7F</div>
            <div>TEL: 03-1234-5678</div>
            <div>営業時間: 平日 10:00 – 19:00</div>
            <div>Email: contact@genkai-souzou.co.jp</div>
          </address>
          <div className="mt-6 flex gap-2">
            {[
              { abbr: "X", label: "X（旧Twitter）" },
              { abbr: "YT", label: "YouTube" },
              { abbr: "DC", label: "Discord" },
              { abbr: "IG", label: "Instagram" },
            ].map((s) => (
              <a
                key={s.abbr}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] font-mono text-[10px] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[color-mix(in_oklab,var(--accent-cyan)_10%,transparent)]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--text-muted)] md:flex-row">
          <div>© 2014–2026 株式会社幻界創造スタジオ 無断転載を禁じます。</div>
          <div className="font-mono uppercase tracking-[0.25em]">記憶 — 創造 — 物語</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-[0.18]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-40" />
      <div className="pointer-events-none fixed -left-40 top-20 -z-10 h-[480px] w-[480px] rounded-full bg-[var(--accent-violet)] opacity-20 blur-[160px]" />
      <div className="pointer-events-none fixed -right-32 top-[40%] -z-10 h-[420px] w-[420px] rounded-full bg-[var(--accent-cyan)] opacity-15 blur-[160px]" />
      <TopNav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  subtitle,
  jp,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  jp?: string;
}) {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-12">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
        <span className="inline-block h-px w-10 bg-[var(--accent-cyan)]" />
        {kicker}
      </div>
      <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] md:text-7xl">{title}</h1>
      {jp && <div className="mt-3 font-serif-jp text-lg text-[var(--text-muted)]">{jp}</div>}
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-loose text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}
      <div className="divider-glyph mt-10" />
    </section>
  );
}
