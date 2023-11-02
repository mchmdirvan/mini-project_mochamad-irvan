export const userLogin = async (data) => {
  return new Promise((resolve, reject) => {
    const dummyUsers = [
      { username: "admin", password: "password123" },
      { username: "irvan", password: "password" },
      { username: "dedi", password: "password" },
    ];

    setTimeout(() => {
      const user = dummyUsers.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );

      if (user) {
        resolve({ message: "Login Success", payload: data });
      } else {
        reject({ message: "Invalid username or password", payload: null });
      }
    }, 1000);
  });
};

export const userRegister = async (data) => {
  return new Promise((resolve, reject) => {
    const dummyUser = { username: "admin", password: "password123" };

    setTimeout(() => {
      if (
        data.username === dummyUser.username &&
        data.password === dummyUser.password
      ) {
        resolve({ message: "Register Success", payload: data });
      } else {
        reject({ message: "Username already exist", payload: null });
      }
    }, 1000);
  });
};
