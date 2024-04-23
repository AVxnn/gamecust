import axios from "axios";

export const ViewNotifications = async (id: any) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/notifications/viewed/${id}`,
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
