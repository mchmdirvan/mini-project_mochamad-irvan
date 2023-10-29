import axiosWithConfig from "../axiosWithConfig";
import { getDataFromLocalStorage } from "../../localStorageFunction";

export const createWedding = async (data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/weddings", newData);
    return response.data;
  } catch (error) {
    throw Error("Failed to create a new wedding data");
  }
};

export const getWeddings = async () => {
  const user = getDataFromLocalStorage("user") || "";
  try {
    const response = await axiosWithConfig.get(`/weddings?username=${user}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get wedding data");
  }
};

export const updateWeddings = async (data) => {
  const userID = getDataFromLocalStorage("userID") || "";
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.put(`/weddings/${userID}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to update wedding data");
  }
};

export const deleteWeddings = async () => {
  const userID = getDataFromLocalStorage("userID") || "";
  try {
    const response = await axiosWithConfig.delete(`/weddings/${userID}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to delete a product");
  }
};
