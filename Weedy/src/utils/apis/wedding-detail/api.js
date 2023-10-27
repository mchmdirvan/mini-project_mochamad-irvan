import axiosWithConfig from "../axiosWithConfig";

export const getWedding = async () => {
  try {
    const response = await axiosWithConfig.get("/wedding-detail");
    return response.data;
  } catch (error) {
    throw Error("Failed to get wedding data");
  }
};

export const createWedding = async (data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.post("/wedding-detail", newData);
    return response.data;
  } catch (error) {
    throw Error("Failed to create a new wedding data");
  }
};

export const getDetailWedding = async (weddingId) => {
  try {
    const response = await axiosWithConfig.get(`/wedding-detail/${weddingId}`);

    return response.data;
  } catch (error) {
    throw Error("Failed to get a wedding data");
  }
};
