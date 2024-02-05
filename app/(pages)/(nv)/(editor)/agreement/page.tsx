
import React from "react";
import AgreementInfo from "../../../../../components/legendary/MiddleBlock/AgreementInfo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Соглашение | GameCust Новости из мира игр",
  description: "Приветствуем вас на GameCraft - вашем креативном уголке в виртуальной реальности! Здесь вы можете воплощать свою страсть к играм в увлекательные статьи, раскрывая тайны виртуальных миров, делясь советами, историями и впечатлениями.",
  openGraph: {
    title: "GameCust | Соглашение",
    description: "Соглашение | GameCust",
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
}

const AgreementPage = () => {
  return <AgreementInfo />;
};

export default AgreementPage;
