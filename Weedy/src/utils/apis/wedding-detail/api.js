import axiosWithConfig from "../axiosWithConfig";

function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON data from local storage:", error);
      return null;
    }
  }
  return null;
}

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
