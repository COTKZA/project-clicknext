<script setup>
import { ref } from "vue";
import DepositModal from "./deposit-withdraw/DepositModal.vue";
import WithdrawModal from "./deposit-withdraw/WithdrawModal.vue";
import { useTransactionStore } from "~/stores/transactions.ts";

const email = "admin@gmail.com";

// fech balance
const transactionStore = useTransactionStore();

const DepositmodalRef = ref(null);
const WithdrawmodalRef = ref(null);

const amount = ref();

const openDepositModal = () => {
  if (!amount.value || amount.value < 0) {
    alert("กรุณากรอกจำนวนเงิน");
    return;
  }

  DepositmodalRef.value?.open();
};

const openWithdrawModal = () => {
  if (!amount.value || amount.value < 0) {
    alert("กรุณากรอกจำนวนเงิน");
    return;
  }

  WithdrawmodalRef.value?.open();
};

// validate amount
const handleInputAmount = (e) => {
  const value = parseFloat(e.target.value);

  if (value > 100000) {
    alert("โดยสามารถกรอกได้เฉพาะตัวเลข ไม่เกิน 0-100,000 บาท");
    return;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center">
      <span class="text-gray-900 font-medium">
        จำนวนเงินคงเหลือ
        {{
          transactionStore.balance.toLocaleString({
            style: "currency",
            currency: "THB",
          })
        }}
        บาท
      </span>
    </div>

    <div class="mt-5 px-4 w-full">
      <form class="w-full max-w-52 mx-auto">
        <label
          for="amount"
          class="block mb-2 text-sm font-medium text-gray-900"
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

        <div class="mt-5 flex items-center gap-2">
          <button
            type="button"
            @click="openDepositModal"
            class="w-full bg-green-500 p-1.5 rounded-md font-bold text-white"
          >
            ฝาก
          </button>
          <button
            type="button"
            @click="openWithdrawModal"
            class="w-full bg-red-500 p-1.5 rounded-md font-bold text-white"
          >
            ถอน
          </button>
        </div>
      </form>
    </div>
  </div>

  <DepositModal ref="DepositmodalRef" :amount="amount" :email="email" />

  <WithdrawModal ref="WithdrawmodalRef" :amount="amount" :email="email" />
</template>
