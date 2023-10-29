function getDataFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON data from local storage:", error);
    }
  }
  return null;
}

function saveDataToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

export { getDataFromLocalStorage, saveDataToLocalStorage };
