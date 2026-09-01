<script setup lang="ts">
import { Menu } from "@lucide/vue";

const emit = defineEmits(["openSideBar"]);
</script>
<template>
  <header class="h-14 bg-white border-b-3 border-gray-400">
    <div class="flex items-center justify-between mx-auto sm:mx-6 p-3">
      <!-- button menu -->
      <button class="block sm:hidden" @click="emit('openSideBar')"><Menu /></button>

      <h1 class="text-[#404040] text-xl">Clicknext</h1>

      <button class="bg-[#4d4d4d] text-white px-4 py-1 rounded-md font-bold">
        Logout
      </button>
    </div>
  </header>
</template>
