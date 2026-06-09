"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { POSITIONS } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Careers() {
  return (
    <SiteShell>
      <PageHeader
        kicker="採用情報 — 採用情報"
        title="次の世界を、共に。"
        jp="あなたの一筆が、誰かの記憶になる。"
        subtitle="幻界創造スタジオでは、年齢・経歴・国籍を問わず、物語を愛するクリエイターをお待ちしています。"
      />

      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "スタジオ文化",
              b: "「迷ったら物語に帰る」を共通言語に、職種を超えて一つの世界に責任を持ちます。",
            },
            {
              t: "福利厚生",
              b: "完全週休二日、リモートハイブリッド、書籍購入補助、メンタルヘルスサポート、住宅補助(東京都内)。",
            },
            {
              t: "労働環境",
              b: "クランチ禁止。コアタイム外勤務はマネージャー承認制。年間平均残業 8時間未満。",
            },
            {
              t: "学習機会",
              b: "年20万円のスキルアップ補助、社内勉強会、海外カンファレンス参加支援、社内図書館 6000冊。",
            },
            {
              t: "選考プロセス",
              b: "書類選考 → ポートフォリオ面談 → 実技課題 → 最終面接。全工程おおむね4週間。",
            },
            {
              t: "キャリア成長",
              b: "半期ごとの1on1キャリア面談、ジョブローテーション制度、社内副業可。",
            },
          ].map((c) => (
            <div key={c.t} className="card-surface rounded-sm p-7">
              <div className="font-display text-xl font-bold">{c.t}</div>
              <p className="mt-3 text-sm leading-loose text-[var(--text-muted)]">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
              募集中のポジション
            </div>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">
              募集中のポジション
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
            全 {POSITIONS.length} 職種
          </div>
        </div>
        <div className="space-y-4">
          {POSITIONS.map((p) => (
            <details key={p.title} className="card-surface group rounded-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                <div>
                  <div className="font-display text-xl font-bold">{p.title}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    {p.type}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--accent-cyan)] transition-transform group-open:rotate-45"
                />
              </summary>
              <div className="grid gap-6 border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] p-6 md:grid-cols-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                    業務内容
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                    {p.duties.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                    応募要件
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                    {p.requirements.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                    歓迎スキル
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                    {p.nice.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
