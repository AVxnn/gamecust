import React from "react";
import AgreementInfo from "../../../../../components/legendary/MiddleBlock/AgreementInfo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
};

const AgreementPage = () => {
  return <AgreementInfo />;
};

export default AgreementPage;
