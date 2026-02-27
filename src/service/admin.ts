import axios from "./axios.customize";

export const fetchUserAPI = () => {
  const urlBackend = `/api/v1/users?current=1&pageSize=10&populate=roleId`;

  return axios.get<IBackendRes<IModalPaginate<IUserTable>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};

export const updateUserStatusAPI = (id: string, status: string) => {
    const urlBackend = `/api/v1/users/${id}/status`
  return axios.patch(urlBackend, {
    status,
  });
};

export const fetchRolesAPI = () => {
  const urlBackend = `/api/v1/roles?current=1&pageSize=10`;

  return axios.get<IBackendRes<IModalPaginate<IRoles>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};
