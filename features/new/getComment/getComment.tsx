import React from "react";

export const getComments = async (PostId: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comment/getComments/${PostId}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
