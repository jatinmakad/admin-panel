import axios from "axios";

function getHeaders() {
  return { "Content-Type": "application/json" };
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: getHeaders(),
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      console.log(`error ${status}`);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("uniqueId");
      window.location.reload();
    } else if (!error.response) {
      console.log("network error", error.message);
    }

    return Promise.reject(error);
  },
);

function apiGet(url, params = {}, config = {}) {
  return instance.get(url, { params, ...config });
}

function apiPost(url, body, config = {}) {
  return instance.post(url, body, config);
}

function apiPut(url, body, config = {}) {
  return instance.put(url, body, config);
}

function apiDelete(url, config = {}) {
  return instance.delete(url, config);
}

export { getHeaders, apiGet, apiPost, apiPut, apiDelete };