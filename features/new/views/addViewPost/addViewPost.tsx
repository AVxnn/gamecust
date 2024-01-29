import React from 'react'

const addViewPost = async (uId: any, postId: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/view/${postId}/${uId}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default addViewPost