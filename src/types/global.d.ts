import { message } from "antd";

export {};

declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    statusCode: number;
    message: string;
    data: T;
  }

  interface IModalPaginate<T> {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    };
    result: T[];
  }

  interface ILogin {
    access_token: string;
    user: IUser;
  }

  interface IUser {
    _id: string;
    fullName: string;
    email: string;
    password: string
    gender: string;
    phone?: string;
    status: string;
    roleId?: {
      _id: string;
      name: string;
    };
  }

  interface IUserTable {
    _id: string;
    fullName: string;
    email: string;
    username: string;
    gender: string;
    phone?: string;
    status: string;
    roleId?: {
      _id: string;
      name: string;
    };
    createdAt?: string;
    updatedAt?: string;
  }

  interface IRoles {
    _id: string;
    name: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
  }
  interface ICategory {
    _id: string;
    name: string;
    createdAt: string;

  }
    interface IProductTable {
    _id: string;
    name: string;
    price: number;
    quantity:number;
    image: any;
    brand: string
    categoryId: ICategory
    createdAt: string;

  }


}


