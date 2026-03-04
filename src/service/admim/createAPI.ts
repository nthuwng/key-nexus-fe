import axios from "../axios.customize";

export const createUserAPI = (fullName:string,email:string,password:string,gender:string,phone:string,roleId:string) =>{
    const urlBackend= "/api/v1/users";
    return axios.post< IBackendRes<IUser>>(urlBackend,{fullName,email,password,gender,phone,roleId})
}
export const createProductAPI = (name :string, price: number,quantity:number,image: File,brand: string, categoryId: string) =>{
    const urlBackend= "/api/v1/products";
    return axios.post< IBackendRes<IProductTable>>(urlBackend,{name,price,quantity,image,brand,categoryId})
}

export const createCategoryAPI = (name :string) =>{
    const urlBackend= "/api/v1/category";
    return axios.post< IBackendRes<ICategory>>(urlBackend,{name})
}
export const createRoleAPI = (name :string) =>{
    const urlBackend= "/api/v1/roles";
    return axios.post< IBackendRes<IRoles>>(urlBackend,{name})
}
  
  


