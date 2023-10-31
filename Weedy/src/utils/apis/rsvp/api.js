import axiosWithConfig from "../axiosWithConfig";
import { getDataFromLocalStorage } from "../../localStorageFunction";

export const createRsvp = async (data) => {
  const userID = getDataFromLocalStorage("userID") || "";
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post(
      `/weddings/${userID}/rsvp`,
      newData
    );
    return response.data;
  } catch (error) {
    throw Error("Failed to create a new rsvp data");
  }
};

export const getRsvp = async () => {
  const userID = getDataFromLocalStorage("userID") || "";
  try {
    const response = await axiosWithConfig.get(`/weddings/${userID}/rsvp`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get rsvp data");
  }
};
