import React from "react";

export const addExpUser = async (id: any, value: any) => {
  try {
    var formdata = new FormData();
    formdata.append("value", value);
    formdata.append("id", id);
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/addExpUser`, {
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

export const removeExpUser = async (id: any, value: any) => {
  try {
    var formdata = new FormData();
    formdata.append("value", value);
    formdata.append("id", id);
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/removeExpUser`, {
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
