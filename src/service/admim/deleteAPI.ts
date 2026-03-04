import axios from "../axios.customize";

export const deleteUserAPI = ( _id: string) => {
  const urlBackend = `/api/v1/users/${_id}`;

  return axios.delete<IBackendRes<IUser>>(urlBackend);
};

export const deleteProductAPI = ( _id: string) => {
  const urlBackend = `/api/v1/products/${_id}`;

  return axios.delete<IBackendRes<IProductTable>>(urlBackend);
};

export const deleteCategoryAPI = ( _id: string) => {
  const urlBackend = `/api/v1/category/${_id}`;

  return axios.delete<IBackendRes<IProductTable>>(urlBackend);
};