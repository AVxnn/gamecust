import React from "react";
import PrivacyInfo from "../../../../../components/legendary/MiddleBlock/PrivacyInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
};

const PrivacPage = () => {
  return <PrivacyInfo />;
};

export default PrivacPage;
