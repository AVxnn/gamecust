import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Редактор",
  openGraph: {
    title: "GameCust | Редактор",
    description: "Редактор | GameCust",
    url: "https://gamecust.ru/categories",
    siteName: "GameCust",
    images: [
      {
        url: "/mstile-150x150.png",
        width: 150,
        height: 150,
      },
    ],
  },
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
