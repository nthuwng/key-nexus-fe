import axios from "./axios.customize";


export const loginAPI = (email: string, password: string) => {
  return axios.post("/api/v1/auth/login", {
    username: email,
    password,
  });
};

export const getProfileAPI = () => {
  return axios.get("/api/v1/auth/profile");
};
