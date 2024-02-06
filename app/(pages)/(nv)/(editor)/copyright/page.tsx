import React from "react";
import CopyrightInfo from "../../../../../components/legendary/MiddleBlock/CopyrightInfo/CopyrightInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Правообладателям",
};

const CopyrightPage = () => {
  return <CopyrightInfo />;
};

export default CopyrightPage;
