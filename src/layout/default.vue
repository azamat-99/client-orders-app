<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import SideBar from "./components/SideBar.vue";
import { computed } from "vue";
</script>

<template>
  <el-config-provider  size="large">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <SideBar class="w-56 border-r" />

      <div class="flex-1 overflow-auto flex flex-col">
        <main class="flex-1 p-6" >
          <router-view />
        </main>
      </div>
    </div>
  </el-config-provider>
</template>
