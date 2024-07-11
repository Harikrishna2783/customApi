export const LoginUser = (username, password) => {
  return new Promise((res, rej) => {
    if (username === "user" && password === "pass") {
      res({
        success: true,
        username,
        email: "user@gmail.com",
      });
    } else rej({ success: false, error: "invalid credentials..." });
  });
};
