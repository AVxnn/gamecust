import React from "react";

export const addImageComment = async (files: any) => {
  try {
    var formdata = new FormData();
    formdata.append("image", files);
    formdata.append("id", "12312312312");
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/file/uploadComment`, {
      method: "POST",
      body: formdata,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => {
        if (JSON.parse(result) === 'Произошла непредвиденная ошибка') {
          return '';
        }
        return JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
