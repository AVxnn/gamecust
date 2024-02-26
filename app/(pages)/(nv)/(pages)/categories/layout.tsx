import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Категории | GameCust Новости из мира игр",
  description: "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
  openGraph: {
    title: "GameCust | Категории",
    description: "Категории | GameCust",
    url: "https://gamecust.ru/categories",
    siteName: "GameCust",
    images: [
      {
        url: "/mstile-150x150.png",
        width: 150,
        height: 150
      }
    ]
  }
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
