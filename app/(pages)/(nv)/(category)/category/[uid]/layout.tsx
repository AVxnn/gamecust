import React from "react";
import getCategoriesTitle from "../../../../../../features/new/getCategoriesTitle/getCategories";
import getCategoriesId from "../../../../../../features/new/getCategoryId/getCategories";

export async function generateMetadata({ params }: any) {
  // read route params
  const id = params.uid;

  // fetch data
  const category = await getCategoriesId(id);

  return {
    title: {
      default: `Категория ${category.title}`,
      template: `%s ${category.title}`,
    },
  };
}

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LayoutPages;
