import { reactive, ref } from "vue";
import { toast } from "vue3-toastify";
import type { IOrder, ISelectAll } from "@/types";
import { defineStore } from "pinia";
import { requestApi } from "@/api";
import type { Method, AxiosError } from "axios";

export const useOrderStore = defineStore("order", () => {
  const dialogs = reactive({
    isAdd: false,
    isUpdate: false,
    isBlock: false,
  });

  const formOrders = reactive<IOrder>({
    categoryId: 0,
    date: "",
    email: "",
    expireDate: "",
    from: "",
    fromCountryId: 0,
    goodCategory: "",
    goodname: "",
    isExpired: false,
    lastname: "",
    phone: "",
    to: "",
    toCountryId: 0,
    uud: "",
    id: 0,
  });
  const orders = ref<IOrder[]>([]);
  const categories = ref<ISelectAll[]>([]);
  const countries = ref<ISelectAll[]>([]);

  const fetchData = async (url: string) => {
    try {
      const { data } = await requestApi(url, "GET");
      orders.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (url: string, method: Method, form: IOrder) => {
    try {
      const path = method === "POST" ? url : `${url}/${form.id}`;
      await requestApi(path, method, {}, form);
      dialogs.isAdd = dialogs.isUpdate = dialogs.isBlock = false;
      fetchData("orders");
      toast(`Успешно`, { type: "success" });
    } catch (error: any) {
      console.error(error);
      toast(`error`, { type: "error" });
    }
  };

  const fetchAllData = async () => {
    const [category, country] = await Promise.all([
      requestApi("categories"),
      requestApi("countries"),
    ]);
    categories.value = category.data;
    countries.value = country.data;
  };

  return {
    orders,
    formOrders,
    dialogs,
    categories,
    countries,
    fetchData,
    handleSubmit,
    fetchAllData,
  };
});
