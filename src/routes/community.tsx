"use client";

import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { TESTIMONIALS } from "@/data/site";

const EVENTS = [
  {
    date: "06.21",
    title: "公式オフ会 in 渋谷",
    desc: "東京会場に150名のプレイヤーが集結。開発者によるパネルディスカッション、限定グッズ販売を実施。",
  },
  {
    date: "07.05",
    title: "オンライントーナメント『零界機兵 LEAGUE』",
    desc: "総額300万円相当の賞品。全プラットフォーム参加可能、解説実況付き配信。",
  },
  {
    date: "08.10",
    title: "コスプレ撮影会 @京都",
    desc: "京都サテライト主催。実在の和洋折衷ロケーションを貸し切り、プロカメラマンによる撮影。",
  },
  {
    date: "09.14",
    title: "コミュニティチャレンジ『記憶を綴る』",
    desc: "「あなたにとって忘れがたいゲーム体験」をテーマに投稿募集。優秀作品集を電子書籍化。",
  },
];

export default function Community() {
  return (
    <SiteShell>
      <PageHeader
        kicker="コミュニティ — コミュニティ"
        title="プレイヤーは、第二の開発者。"
        jp="共に世界を拡張する仲間たちへ。"
        subtitle="作品が世に出てからが、本当の物語の始まり。私たちは作品を生み出す責任と同じだけ、コミュニティを育てる責任を持っていると考えています。"
      />

      <section className="mx-auto max-w-[1400px] px-6 pt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "120K", l: "Discord メンバー" },
            { n: "480K", l: "X フォロワー" },
            { n: "12K", l: "ファンアート投稿数" },
            { n: "35", l: "コミュニティ国数" },
            { n: "240", l: "アンバサダー" },
            { n: "60+", l: "年間イベント" },
          ].map((s) => (
            <div key={s.l} className="card-surface rounded-sm p-6">
              <div className="font-display text-4xl font-black text-gradient">{s.n}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <h2 className="font-display text-4xl font-black">コミュニティイベント</h2>
        <div className="mt-10 space-y-3">
          {EVENTS.map((e) => (
            <div
              key={e.title}
              className="card-surface hover-lift grid items-center gap-4 rounded-sm p-6 md:grid-cols-12"
            >
              <div className="md:col-span-2 font-display text-3xl font-black text-[var(--accent-cyan)]">
                {e.date}
              </div>
              <div className="md:col-span-3 font-display text-lg font-bold">{e.title}</div>
              <div className="md:col-span-7 text-sm leading-relaxed text-[var(--text-muted)]">
                {e.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "クリエイタープログラム",
              b: "配信者・ライターを公式に支援。ロイヤリティフリーの素材集、先行プレイ権、開発者交流会への参加権を提供します。",
            },
            {
              t: "ファンアートギャラリー",
              b: "毎月公式サイトと公式SNSで優秀作品を紹介。年に一度の公式画集に掲載される機会も。",
            },
            {
              t: "コスプレショーケース",
              b: "公式撮影会、衣装制作者へのプロップ提供、コミュニティ投票による年間アンバサダー選出。",
            },
            {
              t: "オンライントーナメント",
              b: "対戦要素のあるタイトルで定期開催。地区予選・本戦・国際大会の三層構造で実施。",
            },
            {
              t: "Discord アクティビティ",
              b: "開発者AMA、テキストRPセッション、世界観クイズ大会など、毎週何かが起こるコミュニティ。",
            },
            {
              t: "アンバサダープログラム",
              b: "情熱を持つプレイヤーを公式アンバサダーに認定。イベント招待、開発者懇親会、限定アイテム提供を行います。",
            },
          ].map((c) => (
            <div key={c.t} className="card-surface hover-lift rounded-sm p-7">
              <div className="font-display text-xl font-bold">{c.t}</div>
              <p className="mt-4 text-sm leading-loose text-[var(--text-muted)]">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pt-32">
        <h2 className="font-display text-4xl font-black">プレイヤーの物語</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-surface rounded-sm p-7">
              <div className="font-display text-3xl text-[var(--accent-cyan)]">“</div>
              <blockquote className="mt-2 font-serif-jp text-base leading-loose text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
