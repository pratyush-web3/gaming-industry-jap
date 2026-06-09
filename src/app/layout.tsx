import type { Metadata } from "next";
import "@/styles.css";

export const metadata: Metadata = {
  title: "幻界創造スタジオ — 記憶に残る世界を、創る。",
  description: "東京拠点のゲーム開発スタジオ。コンソール・PC向けに独自IPの物語体験を届けます。",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "幻界創造スタジオ — Genkai Souzou Studio",
    description: "記憶に残る世界を創り、人々の感情を動かす。",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Shippori+Mincho:wght@400;600;800&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
