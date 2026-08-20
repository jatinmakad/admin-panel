import { jwtDecode } from "jwt-decode";

export const getDecodedToken = () => {
  const token = localStorage.getItem("token");
  return token ? jwtDecode(token) : null;
};
