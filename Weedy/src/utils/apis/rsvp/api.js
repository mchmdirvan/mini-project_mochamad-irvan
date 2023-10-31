import axiosWithConfig from "../axiosWithConfig";

export const createRsvp = async (data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/rsvp", newData);
    return response.data;
  } catch (error) {
    throw Error("Failed to create a new rsvp data");
  }
};

export const getRsvp = async () => {
  try {
    const response = await axiosWithConfig.get(`/rsvp`);
    return response.data;
  } catch (error) {
    throw Error("Failed to get rsvp data");
  }
};
