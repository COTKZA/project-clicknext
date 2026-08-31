<script setup lang="ts">
import Navbar from "~/components/layouts/Navbar.vue";
import Sidebar from "~/components/layouts/Sidebar.vue";

const showSidebar = ref(false);
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar @openSideBar="showSidebar = true" />

    <div class="flex">
      <Sidebar :show="showSidebar" @closeSideBar="showSidebar = false" />
      <main class="flex-1">
        <div class="flex items-center justify-center p-10">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
