import React from "react";

const getCategoriesTitle = async (page: any, filter: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/category/${filter}/${page}}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getCategoriesTitle;
