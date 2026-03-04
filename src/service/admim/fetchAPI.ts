import axios from "../axios.customize";

export const fetchUserAPI = (query: string) => {
  const urlBackend = `/api/v1/users?${query}&populate=roleId`;

  return axios.get<IBackendRes<IModalPaginate<IUserTable>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};

export const updateUserStatusAPI = (id: string, status: string) => {
  const urlBackend = `/api/v1/users/${id}/status`;
  return axios.patch(urlBackend, {
    status,
  });
};

export const fetchRolesAPI = (query: string) => {
  const urlBackend = `/api/v1/roles?${query}`;

  return axios.get<IBackendRes<IModalPaginate<IRoles>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};

export const fetchCategoryAPI = (query: string) => {
  const urlBackend = `/api/v1/category?${query}`;

  return axios.get<IBackendRes<IModalPaginate<ICategory>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};
export const fetchCategoryIdAPI = (_id: string) => {
  const urlBackend = `/api/v1/category?${_id}`;

  return axios.get<IBackendRes<IModalPaginate<ICategory>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};
export const fetchProductAPI = (query: string) => {
  const urlBackend = `/api/v1/products?${query}&populate=categoryId&fields=categoryId.name`;

  return axios.get<IBackendRes<IModalPaginate<IProductTable>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};
export const fetchProductIdAPI = (_id: string) => {
  const urlBackend = `/api/v1/products?${_id}`;

  return axios.get<IBackendRes<IModalPaginate<IProductTable>>>(urlBackend, {
    headers: {
      delay: 1000,
    },
  });
};
