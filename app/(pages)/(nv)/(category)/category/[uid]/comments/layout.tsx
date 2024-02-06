import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Комментарии",
};

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
