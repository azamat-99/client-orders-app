<template>
  <div class="min-h-screen flex justify-center items-center">
    <div
      class="w-full relative max-w-[calc(100vw-60px)] h-[calc(100vh-60px)] bg-[#FFF7E5] shadow-md border border-main rounded-3xl flex items-center justify-center p-8"
    >
      <div class="basis-1/2 max-w-lg p-8">
        <div>
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">
              Добро пожаловать!
            </h1>
            <p class="text-h2 text-gray-600">
              Чтобы войти в систему введите имя пользователя и пароль
            </p>
          </div>
          <div class="bg-white shadow-md rounded-lg p-6">
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Имя пользователя
                </label>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2B027]"
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Пароль
                </label>
                <div class="relative">
                  <input
                    id="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2B027] pr-10"
                  />
                  <button
                    type="button"
                    @click="togglePasswordVisibility"
                    class="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <EyeIcon
                      v-if="!showPassword"
                      class="h-5 w-5 text-gray-400"
                    />
                    <EyeOffIcon v-else class="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <button
                v-loading.lock="loading"
                type="submit"
                class="w-full bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Продолжить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EyeIcon, EyeOffIcon } from "lucide-vue-next";
import { useAuthStore, loading } from "@/store/auth";
const { FETCH_LOGIN } = useAuthStore();

const username = ref("");
const password = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
  FETCH_LOGIN({ login: username.value, password: password.value });
};
</script>