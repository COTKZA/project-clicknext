<script setup lang="ts">
const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["closeSideBar"]);
</script>

<template>
  <aside
    class="h-screen w-68 sm:w-48 bg-[#f8f9fa] sm:block flex flex-col"
    :class="props.show ? 'fixed left-0 top-0 z-50 block' : 'hidden'"
  >
    <!-- header -->
    <div class="h-15 bg-white border-b-3 border-gray-400 block sm:hidden">
      <div class="flex items-center justify-center mx-auto sm:mx-6 p-3">
        <h1 class="text-[#404040] text-xl">Clicknext</h1>
      </div>
    </div>

    <div class="flex flex-col h-screen">
      <!-- menu -->
      <nav class="p-3 mt-4">
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/deposit-withdraw"
              class="block rounded-md px-3 py-2 text-center text-md font-bold text-[#5D5D5D]"
              active-class="bg-[#4d4d4d] text-white"
            >
              Deposit / <br />
              Withdraw
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/transaction"
              class="block rounded-md px-3 py-2 text-center text-md font-bold text-[#5D5D5D]"
              active-class="bg-[#4d4d4d] text-white"
            >
              Transaction
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- button close -->
      <button
        type="button"
        class="p-10 mt-auto font-medium text-gray-900 block sm:hidden"
        @click="emit('closeSideBar')"
      >
        Close
      </button>
    </div>
  </aside>
</template>
