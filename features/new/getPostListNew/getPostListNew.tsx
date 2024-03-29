import React from "react";

export const getPostListNew = async (page: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/${page}`
    );
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
