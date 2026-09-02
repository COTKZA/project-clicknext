<script setup lang="ts">
import { ref } from "vue";
import { useTransactionStore } from "~/stores/transactions";
import { formatAmount } from "~/utils/formatAmount.js";

const props = defineProps<{
  amount: number | any;
  email: string;
}>();

const isOpen = ref<boolean>(false);

const open = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
};

defineExpose({ open, close });

// create Deposit
const transactionStore = useTransactionStore();
const onSubmit = () => {
  if (!props.amount) return;
  try {
    transactionStore.addDeposit("deposit", props.amount, String(props.email));
    close();
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
  >
    <div
      class="w-full max-w-md overflow-hidden rounded-lg bg-white p-6 border border-gray-300 mx-3"
    >
      <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
        <h2 class="text-lg font-bold">ยืนยันการฝาก</h2>

        <span class="text-md font-medium"
          >จำนวนเงิน
          {{ formatAmount(props.amount) }}
          บาท</span
        >

        <div class="flex items-center justify-start">
          <button
            type="submit"
            class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium"
          >
            ยืนยัน
          </button>
          <button
            type="button"
            @click="close"
            class="text-gray-900 px-4 py-1.5 rounded-md font-medium"
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
