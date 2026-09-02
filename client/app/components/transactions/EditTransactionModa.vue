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
const amount = ref();

const open = () => {
  if (!props.id) return;

  transactionById.value = transactionStore.getTransactionById(Number(props.id));
  amount.value = transactionById.value?.amount ?? 0;

  isOpen.value = true;
  errorMessage.value = "";
};
const close = () => {
  isOpen.value = false;
  errorMessage.value = "";
};

defineExpose({ open, close });

// validate amount
const handleInputAmount = () => {
  const value = parseFloat(amount.value);

  if (value > 100000) {
    alert("โดยสามารถกรอกได้เฉพาะตัวเลข ไม่เกิน 0-100,000 บาท");
    return;
  }
};

const onSubmit = () => {
  if (!props.id) return;

  if (!amount.value || amount.value < 0) {
    alert("กรุณากรอกจำนวนเงิน");
    return;
  }

  try {
    transactionStore.updateTransactionById(Number(props.id), amount.value);
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
      <div class="flex flex-col gap-2">
        <h2 class="text-lg font-bold">แก้ไขจำนวนเงินฝาก</h2>
        <form @submit.prevent="onSubmit">
          <div class="flex flex-col">
            <span class="text-sm font-medium"
              >ของวันที่ {{ transactionById?.dateTime }}</span
            >
            <span class="text-sm font-medium"
              >จากอีเมล {{ transactionById?.email }}</span
            >
          </div>

          <div class="mt-2">
            <label
              for="amount"
              class="block mb-2 text-md font-medium text-gray-900"
            >
              จำนวนเงิน *
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              v-model.number="amount"
              min="0"
              max="100000"
              step="0.01"
              inputmode="decimal"
              pattern="/^[0-9]+$/"
              @input="handleInputAmount"
              class="bg-white border-2 border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-200 focus:border-gray-400 block w-full p-1"
              placeholder="กรอกจำนวนเงิน"
              required
            />
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
