"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { TEAM } from "@/data/site";

const TIMELINE = [
  {
    year: "2014",
    title: "創業",
    body: "渋谷の小さなアトリエに、6名のクリエイターが集結。同人ゲーム『深夜列車』を発表。",
  },
  {
    year: "2016",
    title: "初の商業作品",
    body: "『零界機兵:序章』をSteamにて配信。国内外で話題となる。",
  },
  {
    year: "2019",
    title: "コンソール進出",
    body: "『零界機兵』PlayStation 4 / Xbox One版を世界同時発売。Famitsu優秀賞受賞。",
  },
  {
    year: "2021",
    title: "京都サテライト開設",
    body: "ナラティブ開発専門のサテライトスタジオを京都に開設。",
  },
  {
    year: "2024",
    title: "『星影クロニクル』発売",
    body: "国内外で累計200万本突破。Japan Game Awards 最優秀賞受賞。",
  },
  {
    year: "2026",
    title: "新規IP始動",
    body: "完全新作『Project: Aoi』を含む3つの新規プロジェクトを始動。",
  },
];

export default function Studio() {
  return (
    <SiteShell>
      <PageHeader
        kicker="スタジオ紹介 — スタジオ紹介"
        title="想像の境界を、押し広げる。"
        jp="幻界創造スタジオは、東京と京都を拠点に独自IPを生み出す独立系開発スタジオです。"
        subtitle="ジャンルに縛られず、語るべき題材に最も相応しい表現を選ぶ。私たちが12年間守り続けてきた、ものづくりの姿勢です。"
      />

      <section className="mx-auto max-w-[1400px] px-6 pt-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              01 — 創業ストーリー
            </div>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">創業ストーリー</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base leading-loose text-[var(--text-muted)]">
            <p>
              2014年春、渋谷の片隅にある築40年の雑居ビル7階。家庭用ゲーム機の開発現場から独立した6名のクリエイターが、「自分たちが本当に作りたいゲームを、自分たちの手で世に出す」ことを誓いました。それが幻界創造スタジオの始まりです。
            </p>
            <p>
              創業初期は受託開発で資金を繋ぎながら、夜は自社IPの企画書を書く日々。誰もが燃え尽きそうな日々を支えたのは、月に一度開かれる「世界観会議」でした。スタッフ全員でひとつの仮想世界について語り合い、その積み重ねが後の『零界機兵』『星影クロニクル』へと結実していきます。
            </p>
            <p>
              2019年、初の自社IP『零界機兵』が国内外で評価され、コンソール市場への扉が開きます。以降、ナラティブとアートディレクションを両輪に、私たちは独自の道を歩み続けてきました。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              02 — ビジョン
            </div>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">ビジョン</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base leading-loose text-[var(--text-muted)]">
            <p className="font-serif-jp text-2xl leading-relaxed text-foreground">
              「記憶に残る世界を創り、人々の感情を動かす。」
            </p>
            <p>
              私たちが目指すのは、エンドロールが流れ終えた後も、プレイヤーの心の中で生き続ける世界です。技術はあくまで物語に奉仕する道具であり、流行に流されない普遍的な感情を描くことを、何よりも優先します。
            </p>
            <p>2030年までに10億人の心を動かす——それが私たちの長期目標です。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              03 — 開発哲学
            </div>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">開発哲学</h2>
          </div>
          <div className="lg:col-span-8 grid gap-4 md:grid-cols-2">
            {[
              { t: "物語に奉仕する技術", b: "最新の技術より、物語に最も適した技術を選ぶ。" },
              { t: "余白を恐れない", b: "語らない美しさ、見せないことで生まれる想像力を信じる。" },
              {
                t: "小さな違和感に立ち止まる",
                b: "プレイヤーの一瞬の引っかかりを、開発の最終日まで見過ごさない。",
              },
              { t: "プレイヤーと共に育てる", b: "リリースは終わりではなく、対話の始まり。" },
            ].map((p) => (
              <div key={p.t} className="card-surface rounded-sm p-6">
                <div className="font-display text-lg font-bold">{p.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              04 — 世界観設計
            </div>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">世界観設計</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base leading-loose text-[var(--text-muted)]">
            <p>
              幻界創造スタジオの世界観設計は「文化人類学的アプローチ」を採用しています。地理・気候・宗教・言語・経済・服飾・建築まで、ひとつの世界を多層的に設計してから、その世界に生きる人々の物語を描き始めます。
            </p>
            <p>
              『星影クロニクル』では、銀河の歴史年表をA4で180頁分作成しました。本編で語られるのはその10%以下ですが、語られなかった9割が、画面の隅々に説得力として宿ります。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              05 — 開発体制
            </div>
            <h2 className="mt-4 font-display text-3xl font-black md:text-4xl">開発体制</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base leading-loose text-[var(--text-muted)]">
            <p>
              1プロジェクトあたり40〜80名の小規模ユニットを編成し、職種横断のスクラム体制で進行します。ディレクター、アートディレクター、リードシナリオの三者が常時方向性を擦り合わせ、迷ったら必ず物語に立ち返る判断を行います。
            </p>
            <p>
              自社製エンジン〈Genkai-Forge〉は内製のレンダリング・AI・スクリプト基盤を備え、プロトタイピングからリリースまで一貫して使用可能。技術選定の主導権を社外に渡さないことが、私たちの強みです。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            06 — 沿革
          </div>
          <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">沿革</h2>
        </div>
        <div className="relative">
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--accent-cyan)_50%,transparent)] to-transparent" />
          {TIMELINE.map((t) => (
            <div key={t.year} className="relative grid gap-6 pb-10 md:grid-cols-[120px_1fr]">
              <div className="font-display text-2xl font-black text-[var(--accent-cyan)]">
                {t.year}
              </div>
              <div className="relative">
                <div className="absolute -left-9 top-2 h-3 w-3 rounded-full bg-[var(--accent-cyan)] ring-4 ring-[var(--background)]" />
                <div className="font-display text-xl font-bold">{t.title}</div>
                <p className="mt-2 max-w-2xl text-sm leading-loose text-[var(--text-muted)]">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            07 — チーム紹介
          </div>
          <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">チーム紹介</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="card-surface hover-lift rounded-sm p-6">
              <div className="flex h-32 items-center justify-center rounded-sm bg-gradient-to-br from-[color-mix(in_oklab,var(--accent-violet)_25%,transparent)] via-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] to-[color-mix(in_oklab,var(--accent-magenta)_20%,transparent)] font-display text-5xl font-black">
                {m.name.charAt(0)}
              </div>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                {m.role}
              </div>
              <div className="mt-2 font-display text-xl font-bold">{m.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{m.bio}</p>
              <div className="mt-4 border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] pt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                {m.focus}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
