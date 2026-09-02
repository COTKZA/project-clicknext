import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to) => {
  if (!process.client) return;

  const token = localStorage.getItem("authToken");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("authToken");
        return navigateTo("/auth/login");
      }
    } catch (error) {
      localStorage.removeItem("authToken");
      return navigateTo("/auth/login");
    }
  } else if (to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
});