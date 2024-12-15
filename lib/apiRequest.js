import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://nooks-backend.onrender.com/api",
  // baseURL: "http://192.168.1.39:8800/api",
  // baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

// Add a request interceptor to include the Authorization header
apiRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiRequest;
