import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Các endpoint KHÔNG gắn Authorization
const AUTH_SKIP = ["/login", "/register"];

const shouldSkipAuth = (config: any) => {
  const url = (config.url || "").toLowerCase();
  return AUTH_SKIP.some((p) => url.includes(p));
};

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    if (!shouldSkipAuth(config)) {
      const raw =
        localStorage.getItem("access_token") ??
        localStorage.getItem("Authorization") ??
        "";
      if (raw) {
        const token = raw.startsWith("Bearer ") ? raw.slice(7) : raw;
        // không thay object headers gốc (tránh mất header mặc định)
        config.headers = config.headers || {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (config.headers as any).Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Chuẩn hóa: trả về thẳng data để FE dùng res.*
    return response.data;
  },
  (error: AxiosError) => {
    // LUÔN reject, đính kèm payload backend (nếu có)
    const payload = (error.response?.data as any) || error;
    return Promise.reject(payload);
  }
);

export default instance;
