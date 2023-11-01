import { getDataFromLocalStorage } from "../../localStorageFunction";
import axiosWithConfig from "../axiosWithConfig";
import Swal from "../../swal";

export const createWedding = async (data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/weddings", newData);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while creating data wedding. Please contact our support team for assistance.",
      showCancelButton: false,
    });
  }
};

export const getWeddings = async () => {
  const user = getDataFromLocalStorage("user") || "";
  try {
    const response = await axiosWithConfig.get(`/weddings?username=${user}`);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while getting data wedding. Please contact our support team for assistance.",
      showCancelButton: false,
    });
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
    Swal.fire({
      title: "Error",
      text: "An error occurred while updating data wedding. Please contact our support team for assistance.",
      showCancelButton: false,
    });
  }
};

export const deleteWeddings = async () => {
  const userID = getDataFromLocalStorage("userID") || "";
  try {
    const response = await axiosWithConfig.delete(`/weddings/${userID}`);

    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while deleting data wedding. Please contact our support team for assistance.",
      showCancelButton: false,
    });
  }
};
