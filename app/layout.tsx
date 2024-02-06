import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GameCust | игры, разработка, кино, сообщества, общение",
    template: "%s | GameCust игры, разработка, кино, сообщества, общение",
  },
  description:
    "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
  twitter: {
    title: "GameCust | игры, разработка, кино, сообщества, общение",
  },
  openGraph: {
    title: "GameCust | Новости из мира игр",
    description: "Главная страница | Рекомендации",
    url: "https://gamecust.ru/",
    siteName: "GameCust",
    images: [
      {
        url: "/public/mstile-150x150.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
