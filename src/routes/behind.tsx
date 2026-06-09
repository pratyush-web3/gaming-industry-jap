"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";

const PIPELINE = [
  {
    n: "01",
    t: "コンセプトアート",
    b: "世界観の温度を決める最初の一筆。月詠朔をはじめとする社内外のアーティストが、参考写真と即興スケッチを行き来しながら数百枚を描き起こします。",
  },
  {
    n: "02",
    t: "ナラティブ設計",
    b: "シナリオチームは「世界年表」「主要人物関係図」「テーマ宣言文」の三点を起点に、ゲームプレイと不可分な物語構造を設計します。",
  },
  {
    n: "03",
    t: "キャラクター制作",
    b: "コンセプト→3Dモデル→リギング→モーション。各工程のリードが毎週「キャラレビュー」で表情と所作の説得力を確かめます。",
  },
  {
    n: "04",
    t: "サウンドプロダクション",
    b: "現地ロケーションで収録したフィールド音源、専属作曲家による劇伴、声優収録。Wwiseで実装まで一気通貫で担当。",
  },
  {
    n: "05",
    t: "モーションキャプチャ",
    b: "都内自社スタジオを完備。表情キャプチャと身体キャプチャを同時収録し、感情の機微をそのままゲームに反映させます。",
  },
  {
    n: "06",
    t: "ワールドビルディング",
    b: "地理・気候・経済・宗教・服飾・建築まで設計し、画面の隅々に説得力を宿す。語られない9割が世界を支えます。",
  },
  {
    n: "07",
    t: "QA / 検証",
    b: "自動テスト基盤と熟練のヒューマンQAを併用。各機能ごとに2,000以上のテストケースを実施します。",
  },
  {
    n: "08",
    t: "ローカライズ / 配信準備",
    b: "翻訳監修・各プラットフォーム認定・マスターアップ。12言語対応をデフォルトとし、文化適応も丁寧に行います。",
  },
];

export default function Behind() {
  return (
    <SiteShell>
      <PageHeader
        kicker="開発の舞台裏 — 開発の舞台裏"
        title="ひとつの世界が生まれるまで。"
        jp="絵筆、文字、音、コード、そして対話。"
        subtitle="ゲーム開発は、数百人の専門家の眼差しが折り重なる作業です。私たちはその工程をできる限り開示し、プレイヤーと共に作品を育てたいと考えています。"
      />
      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {PIPELINE.map((p) => (
            <article key={p.n} className="card-surface hover-lift rounded-sm p-8">
              <div className="flex items-baseline gap-4">
                <div className="font-display text-5xl font-black text-[var(--accent-cyan)]">
                  {p.n}
                </div>
                <div className="font-display text-2xl font-bold">{p.t}</div>
              </div>
              <p className="mt-5 text-sm leading-loose text-[var(--text-muted)]">{p.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
              社内ワークフロー
            </div>
            <h2 className="mt-4 font-display text-4xl font-black">スタジオの一日</h2>
            <p className="mt-6 text-base leading-loose text-[var(--text-muted)]">
              10:00、全職種の朝会から一日が始まります。10:30から各チームの作業時間。13:00にランチを挟み、午後はレビュー会・素材確認・実装作業が中心。週に一度、全社員参加の「世界観会議」を行い、進行中の作品の方向性を全員で擦り合わせます。
            </p>
            <p className="mt-4 text-base leading-loose text-[var(--text-muted)]">
              夜は基本的にコアタイム外。クランチカルチャーを廃し、長期に渡って質の高い創作を続けられる環境を維持しています。
            </p>
          </div>
          <div className="card-surface rounded-sm p-8 font-mono text-xs">
            <div className="text-[var(--accent-cyan)]">$ daily_schedule</div>
            <div className="mt-4 space-y-2 text-[var(--text-muted)]">
              {[
                ["10:00", "全体朝会 — 15min"],
                ["10:30", "個別作業 / セクションスクラム"],
                ["13:00", "ランチ — フリー"],
                ["14:00", "レビュー会 — チーム別"],
                ["16:00", "個別作業 / 実装"],
                ["18:00", "自主退社 — クランチ禁止"],
                ["金 19:00", "週次・世界観会議"],
              ].map(([t, n]) => (
                <div key={t} className="flex gap-4">
                  <span className="text-[var(--accent-glow)]">{t}</span> {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
