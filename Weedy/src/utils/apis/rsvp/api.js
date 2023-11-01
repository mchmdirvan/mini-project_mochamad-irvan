import axiosWithConfig from "../axiosWithConfig";
import Swal from "../../swal";

export const createRsvp = async (data, id) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post(
      `/weddings/${id}/rsvp`,
      newData
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while creating data RSVP. Please contact our support team for assistance.",
      showCancelButton: false,
    });
  }
};

export const getRsvp = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/weddings/${id}/rsvp`);
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "An error occurred while getting data RSVP. Please contact our support team for assistance.",
      showCancelButton: false,
    });
  }
};
