import { requestApi } from "@/api";
import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";

export const loading = ref(false);
export const useAuthStore = defineStore("auth", () => {
  const userLoggedIn = ref<boolean>(
    localStorage.getItem("token") ? true : false
  );

  const FETCH_LOGIN = async (user: object) => {
    loading.value = true;
    try {
      const { data } = await requestApi("users", "GET", user);
      if (data.length > 0) {
        userLoggedIn.value = data?.token ? true : false;
        localStorage.setItem("token", data?.token);
        router.replace({ path: "/" });
      } else {
        toast("Login failed: Invalid credentials", { type: "error" });
      }
    } catch (error: any) {
      toast.error(`"errror"}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      loading.value = false;
    }
  };
  const logout = () => {
    userLoggedIn.value = false;
    localStorage.clear();
  };
  return { FETCH_LOGIN, userLoggedIn, logout };
});
