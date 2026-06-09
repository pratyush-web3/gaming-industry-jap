import type { Metadata } from "next";
import News from "@/routes/news";

export const metadata: Metadata = {
  title: "ニュース — 幻界創造スタジオ",
  description: "ゲーム発表、アップデート、受賞情報、イベント、コミュニティ情報。",
  openGraph: {
    title: "ニュース — 幻界創造スタジオ",
    description: "スタジオの今を、最初にお届け。",
  },
};

export default News;
