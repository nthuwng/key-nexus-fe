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
    username: string;
    gender: string;
    phone?: string;
    roleId: {
      _id: string;
      name: string;
    };
  }
}
