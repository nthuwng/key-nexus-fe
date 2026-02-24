import axios from "./axios.customize";


export const loginAPI = (email: string, password: string) => {

  console.log("Login API called with:", axios);
  return axios.post("/api/v1/auth/login", {
    username: email,
    password,
  });
};

export const registerAPI = (email: string, password: string) => {

  console.log("Register API called with:", axios);
  return axios.post("/api/v1/auth/register", {
    username: email,
    password,
  });
};

export const getProfileAPI = () => {
  return axios.get("/api/v1/auth/profile");
};
