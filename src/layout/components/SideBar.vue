<template>
  <aside class="min-w-72 h-screen bg-white flex flex-col text-gray3 font-medium">
    <!-- Логотип -->
    <div class="p-4 border-b flex items-center">
      <img src="@/assets/favicon.png" class="ml-3 h-10" />
      <h1 class="text-p1 font-gotham font-medium ml-3 text-[#272727] uppercase">
        Логотип
      </h1>
    </div>

    <el-scrollbar height="calc(100vh- 220px)" class="">
      <!-- Навигация -->
      <nav class="flex-1">
        <ul class="p-3 capitalize relative">
          <li v-for="item in menuItems" :key="item.id">
            <RouterLink :to="`/${item.path}`" @click="toggleActive(item)" :class="[ 
              'flex items-center px-4 py-2 my-2 cursor-pointer rounded-md', 
              item.active ? 'bg-main text-white' : 'hover:bg-gray-100', 
            ]">
              <div v-if="item.active" class="w-1 h-10 bg-[#F2B027] absolute left-0 rounded-xl"></div>
              <span>{{ item.name }} </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </el-scrollbar>
    <!-- Футер -->
    <div class="p-5 border-t flex justify-between items-center">
      <button class="hover:text-gray-800 flex items-center" @click="logout">
        <log-out-icon class="w-5 h-5 mr-2" />
        <RouterLink to="/login">Выйти</RouterLink>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElScrollbar } from "element-plus";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { HomeIcon, LogOutIcon } from "lucide-vue-next";
const { logout } = useAuthStore();
const route = useRoute();

interface MenuItem {
  id: number;
  icon?: any;
  active: boolean;
  name: string;
  path: string;
}

const menuItems = ref<MenuItem[]>([
  {
    id: 1,
    name: "Главная",
    active: false,
    path: "home",
  },
  {
    id: 2,
    name: "О нас",
    active: false,
    path: "about",
  },
]);

const toggleActive = (item: MenuItem) => {
  menuItems.value.forEach((menuItem) => {
    menuItem.active = false;
  });
  item.active = true;
};

const setActiveItemOnLoad = () => {
  let currentPath: string = route.path.replace(/^\//, "");

  if (currentPath === '') currentPath = 'home';
  menuItems.value.forEach((item) => {
    if (currentPath.includes(item.path)) {
      item.active = true;
    }
  });
};

onMounted(() => {
  setActiveItemOnLoad();
});
</script>
