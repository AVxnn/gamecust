import React from "react";
import { getUserId } from "../../../../../../../features/new/getUserId/getUserId";

export async function generateMetadata({ params }: any) {
  // read route params
  const id = params.uid;

  // fetch data
  const user = await getUserId(id);

  return {
    title: {
      default: `${user.username} профиль`,
      template: `${user.username} %s`,
    },
  };
}

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
