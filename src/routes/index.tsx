"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { NeonRunner } from "@/components/site/NeonRunner";
import { WorldExplorer } from "@/components/site/WorldExplorer";
import {
  GAMES,
  NEWS,
  AWARDS,
  TESTIMONIALS,
  TIMELINE,
  ROADMAP,
  PRESS,
  SOUNDTRACKS,
  EVENTS,
  PARTNERS,
  OFFICES,
  FAQ,
  PRINCIPLES,
  NUMBERS,
} from "@/data/site";
import {
  ArrowUpRight,
  Disc3,
  Gamepad2,
  Sparkles,
  Trophy,
  Users,
  Music2,
  CalendarDays,
  MapPin,
  Newspaper,
  Compass,
  HelpCircle,
} from "lucide-react";

export default function Home() {
  const featured = GAMES[0];
  const upcoming = GAMES.filter((g) => g.status.includes("予定") || g.status.includes("早期"));

  return (
    <SiteShell>
      <section className="relative mx-auto max-w-[1440px] px-6 py-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--accent-cyan)]">
              東京拠点のゲームスタジオ
            </span>

            <h1 className="mt-6 text-[clamp(4rem,8vw,7rem)] font-black leading-[0.88]">
              ゲームで、
              <br />
              新しい体験を。
            </h1>

            <p className="mt-8 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
              幻界創造スタジオは東京を拠点とする インディーゲーム開発スタジオです。
              オリジナルIPの企画・開発を通じて、 世界中のプレイヤーへ新しい体験を届けます。
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/games"
                className="rounded-xl bg-[var(--accent-cyan)] px-6 py-3 font-semibold text-black"
              >
                作品一覧
              </Link>

              <Link href="/studio" className="rounded-xl border border-white/10 px-6 py-3">
                スタジオ紹介
              </Link>
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10">
              <img
                src="/hero-studio.avif"
                alt="幻界創造スタジオ"
                className="h-[720px] w-full object-cover object-center transition duration-[2500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
                  設立 2014年
                </div>

                <h2 className="mt-3 text-5xl font-black">
                  幻界
                  <br />
                  創造スタジオ
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">
                  オリジナルタイトルの企画・開発を行う 日本発のゲームスタジオ。
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="card-surface rounded-2xl p-6">
              <div className="text-sm text-[var(--text-muted)]">設立</div>
              <div className="mt-2 text-4xl font-black">2014</div>
            </div>

            <div className="card-surface rounded-2xl p-6">
              <div className="text-sm text-[var(--text-muted)]">開発分野</div>
              <div className="mt-2 text-lg font-semibold">PC・コンソールゲーム</div>
            </div>

            <div className="card-surface rounded-2xl p-6">
              <div className="text-sm text-[var(--text-muted)]">拠点</div>
              <div className="mt-2 text-lg font-semibold">東京</div>
            </div>

            <div className="card-surface rounded-2xl p-6">
              <div className="text-sm text-[var(--text-muted)]">事業内容</div>
              <div className="mt-2 text-lg font-semibold">ゲーム企画・開発</div>
            </div>
          </div>
        </div>
      </section>

      <Section kicker="01 — 注目作品" title="注目作品" jp="物語のかたちは、ひとつではない。">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g) => (
            <Link
              key={g.slug}
              href="/games"
              className="group card-surface hover-lift block overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-30 mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent" />
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground">
                  {g.year}
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-foreground/40 bg-[color-mix(in_oklab,var(--background)_60%,transparent)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground backdrop-blur">
                  {g.status}
                </div>
              </div>
              <div className="p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                  {g.genre}
                </div>
                <h3 className="mt-2 font-display text-2xl font-black">{g.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--text-muted)]">{g.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ===== 世界探索 — WORLD EXPLORER ===== */}
      <Section kicker="02 — 世界探索" title="世界探索" jp="幻界の地図を、自分の足で歩く。">
        <p className="-mt-6 mb-8 max-w-2xl text-sm leading-loose text-[var(--text-muted)]">
          私たちの作品世界は、設定資料一冊ぶんの厚みを持つ「地理」から始まります。各地方を選んで、そこに息づく気候・人口・勢力・伝承を覗いてみてください。
        </p>
        <WorldExplorer />
      </Section>

      {/* ===== ARCADE — NEON RUNNER ===== */}
      <Section
        kicker="03 — アーケード"
        title="ネオンランナー"
        jp="開発チーム制作、ブラウザ用ミニアーケード。"
        right={
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            DEMO BUILD v0.7 · 幻界フォージ製
          </span>
        }
      >
        <NeonRunner />
        <p className="mt-4 max-w-2xl text-xs leading-loose text-[var(--text-muted)]">
          『零界機兵』チーム有志による余興プロジェクト。降り続く酸性雨と霧の都市〈新東京帝都〉を駆け抜け、敵性ドローンを躱しながら〈エナジー結晶〉を集める2分間のランナーアクション。スコアは端末に保存されます。
        </p>
      </Section>

      {/* ===== スタジオ紹介 ===== */}
      <Section
        kicker="02 — スタジオ紹介"
        title="スタジオ紹介"
        jp="私たちの仕事は、想像の境界を押し広げること。"
      >
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-base leading-loose text-[var(--text-muted)]">
              2014年、東京・渋谷の小さなアトリエから始まった幻界創造スタジオは、現在180名のクリエイターを擁する独立系ゲーム開発スタジオへと成長しました。私たちは「記憶に残る物語」を生み出すために、絵筆を握るアーティスト、行間を彫る脚本家、技術を磨くエンジニアが、ひとつの世界観の下で共に呼吸できる環境を大切にしています。
            </p>
            <p className="mt-6 text-base leading-loose text-[var(--text-muted)]">
              ジャンルにとらわれず、語るべき題材に最も相応しい形式を選ぶ——その姿勢が、SF
              RPGからナラティブアドベンチャー、サイバーパンクスリラーまで、多彩な作品群を生み出してきました。
            </p>
            <Link
              href="/studio"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-cyan)] hover:underline"
            >
              スタジオ紹介を読む <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {[
              { icon: Sparkles, n: "10", l: "原作IP", note: "完全オリジナルタイトル" },
              { icon: Gamepad2, n: "8M+", l: "全世界販売本数", note: "2014-2026累計" },
              { icon: Users, n: "180", l: "クリエイター", note: "東京・京都" },
              { icon: Trophy, n: "24", l: "受賞歴", note: "国内外アワード" },
            ].map((s) => (
              <div key={s.l} className="card-surface rounded-sm p-6">
                <s.icon size={20} className="text-[var(--accent-cyan)]" />
                <div className="mt-6 font-display text-4xl font-black">{s.n}</div>
                <div className="mt-1 text-sm font-bold">{s.l}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 最新ニュース ===== */}
      <Section
        kicker="03 — 最新ニュース"
        title="最新ニュース"
        jp="スタジオの今を、最初にお届け。"
        right={
          <Link
            href="/news"
            className="text-sm font-bold text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-1"
          >
            すべて見る <ArrowUpRight size={14} />
          </Link>
        }
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.slice(0, 6).map((n) => (
            <article key={n.title} className="card-surface hover-lift group rounded-sm p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                <span className="text-[var(--accent-cyan)]">{n.category}</span>
                <span className="text-[var(--text-muted)]">{n.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-[var(--accent-cyan)]">
                {n.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {n.summary}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== 今後のリリース ===== */}
      <Section kicker="04 — 今後のリリース" title="今後のリリース" jp="まだ見ぬ世界が、近づいている。">
        <div className="space-y-4">
          {upcoming.map((g, i) => (
            <div
              key={g.slug}
              className="card-surface group grid items-center gap-6 rounded-sm p-6 md:grid-cols-12"
            >
              <div className="md:col-span-1 font-mono text-2xl font-black text-[var(--accent-cyan)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  {g.genre}
                </div>
                <div className="mt-2 font-display text-2xl font-black">{g.title}</div>
              </div>
              <div className="md:col-span-5 text-sm leading-relaxed text-[var(--text-muted)]">
                {g.tagline}
              </div>
              <div className="md:col-span-2 text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent-glow)]">
                  {g.status}
                </div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">
                  {g.platforms.slice(0, 2).join(" · ")}
                </div>
              </div>
              <div className="md:col-span-1 text-right">
                <ArrowUpRight
                  size={20}
                  className="ml-auto text-[var(--accent-cyan)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== コミュニティ紹介 ===== */}
      <Section kicker="05 — コミュニティ" title="コミュニティ" jp="作品は、プレイヤーと共に育つ。">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "ファンアート企画",
              desc: "毎月テーマに沿った作品を募集。優秀作はスタジオ画集に掲載されます。",
            },
            {
              title: "公式Discordサーバー",
              desc: "12万名超のプレイヤーと開発スタッフが交流。先行情報や開発者AMAも開催。",
            },
            {
              title: "アンバサダープログラム",
              desc: "情熱を持つプレイヤーを公式に認定。イベント招待や限定アイテムを提供。",
            },
          ].map((c) => (
            <div key={c.title} className="card-surface hover-lift rounded-sm p-8">
              <div className="font-display text-xl font-bold">{c.title}</div>
              <p className="mt-4 text-sm leading-loose text-[var(--text-muted)]">{c.desc}</p>
              <Link
                href="/community"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-cyan)]"
              >
                参加する <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 受賞歴 ===== */}
      <Section kicker="06 — 受賞歴" title="受賞歴" jp="評価は、創作の励みであり、責任。">
        <div className="card-surface overflow-hidden rounded-sm">
          {AWARDS.map((a, i) => (
            <div
              key={a.title}
              className={`grid items-center gap-4 p-6 md:grid-cols-12 ${i !== AWARDS.length - 1 ? "border-b border-[color-mix(in_oklab,var(--accent-cyan)_10%,transparent)]" : ""}`}
            >
              <div className="md:col-span-2 font-display text-3xl font-black text-[var(--accent-cyan)]">
                {a.year}
              </div>
              <div className="md:col-span-7 font-display text-base font-bold md:text-lg">
                {a.title}
              </div>
              <div className="md:col-span-3 text-right font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                {a.work}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== プレイヤーの声 ===== */}
      <Section
        kicker="07 — プレイヤーの声"
        title="プレイヤーの声"
        jp="物語は、誰かの心に届いてはじめて完成する。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-surface rounded-sm p-8">
              <div className="font-display text-3xl text-[var(--accent-cyan)]">“</div>
              <blockquote className="mt-2 font-serif-jp text-lg leading-loose text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {t.name} — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ===== 数字で見るスタジオ ===== */}
      <Section
        kicker="08 — 数字で見る幻界"
        title="数字で見る幻界"
        jp="12年の歩みを、数字に置き換えると。"
      >
        <div className="card-surface grid grid-cols-2 divide-x divide-y divide-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] overflow-hidden rounded-sm md:grid-cols-3">
          {NUMBERS.map((s) => (
            <div key={s.l} className="p-8">
              <div className="font-display text-5xl font-black text-gradient md:text-6xl">
                {s.n}
              </div>
              <div className="mt-3 text-sm font-bold">{s.l}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 創作の四原則 ===== */}
      <Section kicker="09 — 創作の四原則" title="創作の四原則" jp="私たちが、毎朝立ち戻る場所。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div key={p.num} className="card-surface relative overflow-hidden rounded-sm p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
                原則 · {p.num}
              </div>
              <div className="mt-6 font-display text-2xl font-black">{p.title}</div>
              <p className="mt-3 text-sm leading-loose text-[var(--text-muted)]">{p.desc}</p>
              <div className="pointer-events-none absolute -right-10 -bottom-10 font-display text-[8rem] font-black leading-none text-[color-mix(in_oklab,var(--accent-violet)_18%,transparent)]">
                {p.num}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== スタジオ年表 ===== */}
      <Section kicker="10 — スタジオ年表" title="スタジオ年表" jp="渋谷のアトリエから、世界へ。">
        <div className="relative">
          <div className="absolute left-[7.5rem] top-0 hidden h-full w-px bg-[color-mix(in_oklab,var(--accent-cyan)_25%,transparent)] md:block" />
          <div className="space-y-5">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="card-surface group relative grid items-start gap-5 rounded-sm p-6 md:grid-cols-[7rem_1fr] md:pl-10"
              >
                <div className="font-display text-3xl font-black text-[var(--accent-cyan)]">
                  {t.year}
                </div>
                <div>
                  <div className="font-display text-lg font-bold">{t.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{t.desc}</p>
                </div>
                <span className="absolute left-[7.05rem] top-9 hidden h-2 w-2 rounded-full bg-[var(--accent-glow)] glow-cyan md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== 開発ロードマップ ===== */}
      <Section
        kicker="11 — 開発ロードマップ"
        title="開発ロードマップ"
        jp="次の2年、私たちが目指していること。"
      >
        <div className="card-surface overflow-hidden rounded-sm">
          <div className="grid grid-cols-12 border-b border-[color-mix(in_oklab,var(--accent-cyan)_18%,transparent)] bg-[color-mix(in_oklab,var(--surface-2)_60%,transparent)] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            <div className="col-span-2">期間</div>
            <div className="col-span-2">フェーズ</div>
            <div className="col-span-6">プロジェクト</div>
            <div className="col-span-2 text-right">タグ</div>
          </div>
          {ROADMAP.map((r) => (
            <div
              key={r.item}
              className="grid grid-cols-12 items-center gap-3 border-b border-[color-mix(in_oklab,var(--accent-cyan)_8%,transparent)] px-6 py-5 last:border-0"
            >
              <div className="col-span-2 font-display text-base font-bold text-[var(--accent-cyan)]">
                {r.quarter}
              </div>
              <div className="col-span-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                {r.phase}
              </div>
              <div className="col-span-6 text-sm leading-relaxed">{r.item}</div>
              <div className="col-span-2 text-right">
                <span className="inline-block rounded-sm border border-[color-mix(in_oklab,var(--accent-magenta)_45%,transparent)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--accent-magenta)]">
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 音楽 ===== */}
      <Section kicker="12 — 音の世界" title="音の世界" jp="物語と同じ温度で、音は鳴る。">
        <div className="grid gap-4 md:grid-cols-2">
          {SOUNDTRACKS.map((s) => (
            <div
              key={s.title}
              className="card-surface hover-lift flex items-center gap-5 rounded-sm p-5"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-sm bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)]">
                <Music2 size={24} className="text-background" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-base font-bold leading-tight">{s.title}</div>
                <div className="mt-1 text-xs text-[var(--text-muted)]">作曲: {s.composer}</div>
                <div className="mt-2 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  <span>{s.tracks} 曲</span>
                  <span>{s.length}</span>
                  <span>{s.year}</span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--accent-cyan)]" />
            </div>
          ))}
        </div>
      </Section>

      {/* ===== イベント出展 ===== */}
      <Section kicker="13 — イベント出展予定" title="イベント出展予定" jp="現地で、直接お会いしましょう。">
        <div className="grid gap-4 md:grid-cols-2">
          {EVENTS.map((e) => (
            <div
              key={e.name}
              className="card-surface hover-lift flex items-start gap-5 rounded-sm p-6"
            >
              <CalendarDays size={22} className="mt-1 shrink-0 text-[var(--accent-cyan)]" />
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                  {e.date}
                </div>
                <div className="mt-2 font-display text-lg font-bold">{e.name}</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">
                  {e.city} · ブース {e.booth}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== メディア掲載 ===== */}
      <Section kicker="14 — メディア掲載" title="メディア掲載" jp="編集者たちが、作品に贈った言葉。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((p) => (
            <figure key={p.outlet} className="card-surface rounded-sm p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
                <span className="inline-flex items-center gap-2 text-[var(--accent-cyan)]">
                  <Newspaper size={12} /> {p.outlet}
                </span>
                <span className="text-[var(--accent-glow)]">{p.score}</span>
              </div>
              <blockquote className="mt-4 font-serif-jp text-base leading-loose">
                「{p.quote}」
              </blockquote>
            </figure>
          ))}
        </div>
      </Section>

      {/* ===== パートナー ===== */}
      <Section kicker="15 — パートナー" title="パートナー" jp="共に世界を運ぶ、信頼できる仲間たち。">
        <div className="card-surface grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-[color-mix(in_oklab,var(--accent-cyan)_12%,transparent)] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="grid place-items-center bg-[var(--surface)] px-4 py-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] transition hover:text-[var(--accent-cyan)]"
            >
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* ===== 拠点 ===== */}
      <Section kicker="16 — 拠点" title="拠点" jp="東京・京都・福岡の3拠点で創ります。">
        <div className="grid gap-5 md:grid-cols-3">
          {OFFICES.map((o) => (
            <div key={o.city} className="card-surface hover-lift rounded-sm p-7">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                <MapPin size={12} /> {o.city}
              </div>
              <div className="mt-5 font-serif-jp text-sm leading-loose">{o.address}</div>
              <div className="mt-5 border-t border-[color-mix(in_oklab,var(--accent-cyan)_15%,transparent)] pt-4 text-xs text-[var(--text-muted)]">
                <div>
                  <span className="font-mono uppercase tracking-[0.25em] text-foreground/70">
                    チーム
                  </span>{" "}
                  · {o.team}
                </div>
                <div className="mt-1">
                  <span className="font-mono uppercase tracking-[0.25em] text-foreground/70">
                    営業時間
                  </span>{" "}
                  · {o.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section kicker="17 — よくあるご質問" title="よくあるご質問" jp="お問い合わせの前に、まずこちらを。">
        <div className="card-surface divide-y divide-[color-mix(in_oklab,var(--accent-cyan)_12%,transparent)] overflow-hidden rounded-sm">
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              className="group p-6 open:bg-[color-mix(in_oklab,var(--surface-2)_50%,transparent)]"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="mt-1 shrink-0 text-[var(--accent-cyan)]" />
                  <span className="font-display text-base font-bold leading-snug">{f.q}</span>
                </div>
                <span className="mt-1 font-mono text-xl leading-none text-[var(--accent-cyan)] transition-transform group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="mt-4 pl-7 text-sm leading-loose text-[var(--text-muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ===== クリエイターの言葉 ===== */}
      <Section kicker="18 — クリエイターの言葉" title="クリエイターの言葉" jp="代表取締役・葛城凛より。">
        <div className="card-surface relative overflow-hidden rounded-sm p-10 md:p-14">
          <Compass size={28} className="text-[var(--accent-cyan)]" />
          <blockquote className="mt-6 max-w-3xl font-serif-jp text-xl leading-loose md:text-2xl">
            「私たちは、過去のヒット作の続編を作るために集まったわけではありません。
            <br />
            まだ語られていない物語、まだ描かれていない景色、まだ救われていない感情——
            <br />
            その<span className="text-gradient font-bold">空白</span>
            を埋めることを、12年間ひたすら続けてきました。
            <br />
            次の作品もまた、誰かの夜を少しだけ明るくする灯になりますように。」
          </blockquote>
          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
            葛城 凛 — 代表取締役 / クリエイティブディレクター
          </div>
          <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[var(--accent-violet)] opacity-20 blur-[140px]" />
        </div>
      </Section>

      {/* ===== ニュースレター ===== */}
      <section className="mx-auto max-w-[1400px] px-6 pt-24">
        <div className="card-surface relative overflow-hidden rounded-sm p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--accent-violet)] opacity-30 blur-[120px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[var(--accent-cyan)] opacity-20 blur-[120px]" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
                19 — ニュースレター
              </div>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                次の章を、
                <br />
                誰よりも先に。
              </h2>
              <p className="mt-4 max-w-md text-sm leading-loose text-[var(--text-muted)]">
                新作情報、舞台裏のメイキング、ベータテストの案内など、月2回お届けします。配信解除はいつでも可能です。
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="メールアドレスを入力"
                className="flex-1 rounded-sm border border-[color-mix(in_oklab,var(--accent-cyan)_30%,transparent)] bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--accent-cyan)]"
              />
              <button className="rounded-sm bg-[var(--accent-cyan)] px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-background transition hover:bg-[var(--accent-glow)]">
                登録する
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Section({
  kicker,
  title,
  jp,
  right,
  children,
}: {
  kicker: string;
  title: string;
  jp?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-[var(--accent-cyan)]">
            <span className="inline-block h-px w-10 bg-[var(--accent-cyan)]" />
            {kicker}
          </div>
          <h2 className="mt-5 font-display text-4xl font-black md:text-6xl">{title}</h2>
          {jp && <div className="mt-3 font-serif-jp text-base text-[var(--text-muted)]">{jp}</div>}
        </div>
        {right}
      </div>
      {children}
    </section>
  );
}
