import React from 'react'

const getCommentsId = async (uId: String) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comment/getCommentsId/${uId}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default getCommentsId