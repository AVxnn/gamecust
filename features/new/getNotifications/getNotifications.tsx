import axios from "axios";
import React from "react";
import uuid from "react-uuid";

export const createNotification = async (
  id: any,
  title: any,
  description: any,
  status: any,
  currentUserId: any
) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/notification/create/${id}`,
      data: {
        receiver: id,
        user: currentUserId,
        publishedDate: `${Date.now()}`,
        title: title,
        description: description || "",
        status: status,
        viewed: false,
      },
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteNotification = async (id: any) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/notification/delete/${id}`,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getNotification = async (id: any) => {
  try {
    let noticifationId = uuid();
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/notification/${id}`,
    };
    return axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getNotificationList = async (id: any, page: any) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/notifications/${id}/${page}`,
    };
    return axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
