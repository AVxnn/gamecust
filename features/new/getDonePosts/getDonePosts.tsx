import React from 'react'

const getDonePosts = async (uid: any, page: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/${uid}/${page}}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default getDonePosts