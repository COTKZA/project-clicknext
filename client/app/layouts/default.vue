<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import Navbar from "~/components/layouts/Navbar.vue";
import Sidebar from "~/components/layouts/Sidebar.vue";

const router = useRouter();
const isAuthenticated = ref(null);

onMounted(() => {
  const token = localStorage.getItem("authToken");
  if (token) {
    isAuthenticated.value = true;
  } else {
    isAuthenticated.value = false;
    router.push("/auth/login");
  }
});

const showSidebar = ref(false);
</script>

<template>
  <div v-if="isAuthenticated" class="min-h-screen bg-white">
    <Navbar @openSideBar="showSidebar = true" />

    <div class="flex">
      <Sidebar :show="showSidebar" @closeSideBar="showSidebar = false" />
      <main class="flex-1 min-w-0">
        <div class="p-10">
          <slot />
        </div>
      </main>
    </div>
  </div>

  <div v-else class="flex items-center justify-center h-screen">
    <p class="text-yellow-500">...Loading...</p>
  </div>
</template>
