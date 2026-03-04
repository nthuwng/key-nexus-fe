import axios from "../axios.customize";

export const updateProductAPI = ( _id: string,name: string,price: number,quantity: number,brand: string) => {
  const urlBackend = `/api/v1/products/${_id}`;

  return axios.patch<IBackendRes<IProductTable>>(urlBackend, {name,price,quantity,brand,});
};

export const updateCategoryAPI = ( _id: string,name: string) => {
  const urlBackend = `/api/v1/category/${_id}`;

  return axios.patch<IBackendRes<ICategory>>(urlBackend, {name});
};