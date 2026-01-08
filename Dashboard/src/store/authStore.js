
import { create } from "zustand";

const authStore = (set) => ({
  authData:
    typeof window !== "undefined" && localStorage.getItem("authentications")
      ? JSON.parse(localStorage.getItem("authentications"))
      : null,
  setAuthData: (data) => {
   
    
    if (typeof window !== "undefined") {
      localStorage.setItem("authentications", JSON.stringify(data));
    }
    set(() => ({
      authData: data,
    }));
  },
  clearAuthData: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authentications");
    }
    set(() => ({
      authData: null,
    }));
  },
});

const useAuthDataStore = create(authStore);

export default useAuthDataStore;
