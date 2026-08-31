<script setup lang="ts">
import { ref } from "vue";
import { useTransactionStore, type Transaction } from "~/stores/transactions";

const props = defineProps<{
  id: number | null;
}>();

const transactionStore = useTransactionStore();

const isOpen = ref(false);
const errorMessage = ref("");
const transactionById = ref<Transaction>();

const open = async () => {
  if (!props.id) return;

  transactionById.value = transactionStore.getTransactionById(Number(props.id));

  isOpen.value = true;
  errorMessage.value = "";
};

const close = () => {
  isOpen.value = false;
  errorMessage.value = "";
};

defineExpose({ open, close });

// delete trabsaction by id
const onSubmit = () => {
  if(!props.id) return;

  try {
    transactionStore.deleteTransaction(Number(props.id));
    close();
  } catch (error: any) {
    errorMessage.value = error;
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
      <div class="flex flex-col gap-2">
        <h2 class="text-lg font-bold">ยืนยันการลบ</h2>
        <form @submit.prevent="onSubmit">
          <div class="flex flex-col">
            <span class="text-md font-medium"
              >จำนวนเงินถอน {{ transactionById?.amount }} บาท</span
            >
            <span class="text-md font-medium"
              >ของวันที่ {{ transactionById?.dateTime }}</span
            >
            <span class="text-md font-medium"
              >จากอีเมล {{ transactionById?.email }}</span
            >
          </div>

          <p v-if="errorMessage" class="text-xs text-red-500">
            {{ errorMessage }}
          </p>

          <div class="flex items-center justify-start mt-4">
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
  </div>
</template>
