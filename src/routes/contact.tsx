"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const FAQ = [
  {
    q: "取材・インタビューの依頼方法は?",
    a: "お問い合わせフォームよりカテゴリ「取材」を選択の上、媒体名・希望日程をお書き添えください。",
  },
  {
    q: "ボイス出演・楽曲提供のオファーは?",
    a: "現在は基本的にエージェンシー経由でのみ受け付けております。ご相談はビジネス窓口まで。",
  },
  {
    q: "ゲームの不具合報告先は?",
    a: "各タイトル公式サイトのサポートページ、または公式Discord内のサポートチャンネルにて受付しております。",
  },
  {
    q: "見学・スタジオツアーは可能?",
    a: "セキュリティ上、原則としてお断りしております。公式イベント時の限定公開のみ実施しています。",
  },
];

export default function Contact() {
  const [done, setDone] = useState(false);
  return (
    <SiteShell>
      <PageHeader
        kicker="お問い合わせ — お問い合わせ"
        title="お気軽にご連絡ください。"
        jp="ご質問・取材依頼・ビジネス相談を受け付けております。"
      />

      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="card-surface rounded-sm p-7">
              <MapPin className="text-[var(--accent-cyan)]" size={20} />
              <div className="mt-4 font-display text-lg font-bold">本社所在地</div>
              <p className="mt-2 text-sm leading-loose text-[var(--text-muted)]">
                〒150-0002
                <br />
                東京都渋谷区渋谷三丁目12番18号
                <br />
                幻界ビル7F
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="card-surface rounded-sm p-7">
                <Mail className="text-[var(--accent-cyan)]" size={20} />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  メール
                </div>
                <div className="mt-2 text-sm">contact@genkai-souzou.co.jp</div>
              </div>
              <div className="card-surface rounded-sm p-7">
                <Phone className="text-[var(--accent-cyan)]" size={20} />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  電話
                </div>
                <div className="mt-2 text-sm">03-1234-5678</div>
              </div>
              <div className="card-surface rounded-sm p-7">
                <Clock className="text-[var(--accent-cyan)]" size={20} />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  営業時間
                </div>
                <div className="mt-2 text-sm">
                  平日 10:00 – 19:00
                  <br />
                  土日祝 休業
                </div>
              </div>
              <div className="card-surface rounded-sm p-7">
                <MapPin className="text-[var(--accent-cyan)]" size={20} />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  京都サテライト
                </div>
                <div className="mt-2 text-sm">
                  中京区烏丸通三条下ル
                  <br />
                  烏丸三条ビル 5F
                </div>
              </div>
            </div>
            <div className="card-surface relative aspect-[16/10] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[color-mix(in_oklab,var(--accent-violet)_25%,transparent)] to-[color-mix(in_oklab,var(--accent-cyan)_20%,transparent)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto h-3 w-3 rounded-full bg-[var(--accent-cyan)] animate-pulse-ring" />
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  35.6586°N · 139.7016°E
                </div>
                <div className="mt-1 font-display text-sm font-bold">幻界ビル — 渋谷</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="lg:col-span-7 card-surface rounded-sm p-8 md:p-10"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
              お問い合わせフォーム
            </div>
            <h2 className="mt-3 font-display text-3xl font-black">お問い合わせフォーム</h2>
            {done ? (
              <div className="mt-10 rounded-sm border border-[var(--accent-glow)] bg-[color-mix(in_oklab,var(--accent-glow)_10%,transparent)] p-8">
                <div className="font-display text-2xl font-bold">送信が完了しました。</div>
                <p className="mt-3 text-sm text-[var(--text-muted)]">
                  3営業日以内に担当者よりご連絡いたします。
                </p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5">
                <Field label="お名前" name="name" required />
                <Field label="会社・媒体名" name="company" />
                <Field label="メールアドレス" name="email" type="email" required />
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    お問い合わせ種別
                  </label>
                  <select className="w-full rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-4 py-3 text-sm">
                    {[
                      "取材依頼",
                      "ビジネス相談",
                      "採用について",
                      "ゲームに関するお問い合わせ",
                      "その他",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    本文
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-4 py-3 text-sm leading-relaxed"
                  />
                </div>
                <label className="flex items-start gap-3 text-xs text-[var(--text-muted)]">
                  <input type="checkbox" required className="mt-1 accent-[var(--accent-cyan)]" />
                  プライバシーポリシーに同意の上、送信します。
                </label>
                <button className="mt-2 rounded-sm bg-[var(--accent-cyan)] px-6 py-3.5 font-bold uppercase tracking-[0.25em] text-background transition hover:bg-[var(--accent-glow)]">
                  送信する
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <h2 className="font-display text-4xl font-black">よくあるご質問</h2>
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="card-surface group rounded-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-display text-base font-bold">
                {f.q}
                <span className="text-[var(--accent-cyan)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] p-6 text-sm leading-loose text-[var(--text-muted)]">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
        {label} {required && <span className="text-[var(--accent-magenta)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent-cyan)]"
      />
    </div>
  );
}
