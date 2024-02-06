import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Редактор",
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
