import axios from "../axios.customize";

export const loginAPI = (email: string, password: string) => {
  return axios.post("/api/v1/auth/login", {
    username: email,
    password,
  });
};

export const registerAPI = () => {
  return axios.post("/api/v1/auth/register", {});
};

export const getProfileAPI = () => {
  return axios.get("/api/v1/auth/profile");
};

export const createUserAPI = (
  fullName: string,
  email: string,
  password: string,
  gender: string,
  phone: string,
  roleId: string,
) => {
  const urlBackend = "/api/v1/users";
  return axios.post<IBackendRes<IUser>>(urlBackend, {
    fullName,
    email,
    password,
    gender,
    phone,
    roleId,
  });
};
export const createProductAPI = (
  name: string,
  price: number,
  quantity: number,
  image: File,
  brand: string,
  categoryId: string,
) => {
  const urlBackend = "/api/v1/products";
  return axios.post<IBackendRes<IProductTable>>(urlBackend, {
    name,
    price,
    quantity,
    image,
    brand,
    categoryId,
  });
};

export const createCategoryAPI = (name: string) => {
  const urlBackend = "/api/v1/category";
  return axios.post<IBackendRes<ICategory>>(urlBackend, { name });
};
export const createRoleAPI = (name: string) => {
  const urlBackend = "/api/v1/roles";
  return axios.post<IBackendRes<IRoles>>(urlBackend, { name });
};

export const deleteUserAPI = (_id: string) => {
  const urlBackend = `/api/v1/users/${_id}`;

  return axios.delete<IBackendRes<IUser>>(urlBackend);
};

export const deleteProductAPI = (_id: string) => {
  const urlBackend = `/api/v1/products/${_id}`;

  return axios.delete<IBackendRes<IProductTable>>(urlBackend);
};

export const deleteCategoryAPI = (_id: string) => {
  const urlBackend = `/api/v1/category/${_id}`;

  return axios.delete<IBackendRes<IProductTable>>(urlBackend);
};

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

export const updateProductAPI = (
  _id: string,
  name: string,
  price: number,
  quantity: number,
  brand: string,
) => {
  const urlBackend = `/api/v1/products/${_id}`;

  return axios.patch<IBackendRes<IProductTable>>(urlBackend, {
    name,
    price,
    quantity,
    brand,
  });
};

export const updateCategoryAPI = (_id: string, name: string) => {
  const urlBackend = `/api/v1/category/${_id}`;

  return axios.patch<IBackendRes<ICategory>>(urlBackend, { name });
};
