import { getDataFromLocalStorage } from "../../localStorageFunction";

export const userLogin = async (data) => {
  return new Promise((resolve, reject) => {
    const dummyUsers = { username: "admin", password: "password123" };
    const storedUser = getDataFromLocalStorage("username");
    const storedPassword = getDataFromLocalStorage("password");

    setTimeout(() => {
      if (
        data.username === dummyUsers.username &&
        data.password === dummyUsers.password
      ) {
        resolve({ message: "Login Success", payload: data });
      } else if (
        data.username === storedUser &&
        data.password === storedPassword
      ) {
        resolve({ message: "Login Success", payload: data });
      } else if (
        data.username === dummyUsers.username &&
        data.password !== dummyUsers.password
      ) {
        reject({ message: "Invalid password", payload: null });
      } else if (
        data.username !== dummyUsers.username &&
        data.password === dummyUsers.password
      ) {
        reject({ message: "Invalid username", payload: null });
      } else {
        reject({ message: "Invalid username or password", payload: null });
      }
    }, 1000);
  });
};

export const userRegister = async (data) => {
  return new Promise((resolve) => {
    const dummyUser = { username: "admin", password: "password123" };
  

    setTimeout(() => {
      if (
        data.username === dummyUser.username &&
        data.password === dummyUser.password
      ) {
        resolve({ message: "Register Success", payload: data });
      } else {
        resolve({ message: "Register Success", payload: data });
      }
    }, 1000);
  });
};
