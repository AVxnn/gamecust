import React from "react";

export const getSearch = async (value: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${value}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSearchPosts = async (value: any, page: any) => {
  console.log(page);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search/posts/${page}/${value}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSearchUsers = async (value: any, page: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search/users/${page}/${value}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
