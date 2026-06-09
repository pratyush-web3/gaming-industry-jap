import type { Metadata } from "next";
import Contact from "@/routes/contact";

export const metadata: Metadata = {
  title: "お問い合わせ — 幻界創造スタジオ",
  description: "取材、ビジネス、採用、サポートに関するお問い合わせ窓口。",
  openGraph: {
    title: "お問い合わせ — 幻界創造スタジオ",
    description: "お気軽にご連絡ください。",
  },
};

export default Contact;
