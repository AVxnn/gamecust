import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Категории",
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
