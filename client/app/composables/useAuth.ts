import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const getEmail = () => {
    const token = localStorage.getItem("authToken");

    if (!token) return null;

    try {
      const decoded = jwtDecode<{ email: string }>(token);

      return decoded.email;
    } catch (error: any) {
      alert("invalid token:");
      return null;
    }
  };

  return { getEmail };
};
