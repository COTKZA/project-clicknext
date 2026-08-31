<script setup>
import { ref } from "vue";
import DepositModal from "./deposit-withdraw/DepositModal.vue";
import WithdrawModal from "./deposit-withdraw/WithdrawModal.vue";

const modalRef = ref(null)

const openDepositModal = () => {
    modalRef.value?.open()
}

const openWithdrawModal = () => {
    modalRef.value?.open()
}

const amount = ref();

// validate amount
const handleInputAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (value > 100000) {
        amount.value = 100000;
    }
};
</script>

<template>
    <div>
        <div class="flex items-center justify-center">
            <span class="text-gray-900 font-medium">
                จำนวนเงินคงเหลือ 1,000,000 บาท
            </span>
        </div>

        <div class="mt-5 px-4">
            <form action="">
                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">
                    จำนวนเงิน *
                </label>
                <input type="number" name="amount" id="amount" v-model.number="amount" min="1" max="100000" step="1"
                    inputmode="decimal" pattern="[0-9]" @input="handleInputAmount"
                    class="bg-white border-2 border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-200 focus:border-gray-400 block w-full p-1"
                    placeholder="กรอกจำนวนเงิน" required />

                <div class="mt-5 flex items-center gap-2">
                    <button type="button" @click="openDepositModal"
                        class="w-full bg-green-500 p-1.5 rounded-md font-bold text-white">
                        ฝาก
                    </button>
                    <button type="button" @click="openWithdrawModal"
                        class="w-full bg-red-500 p-1.5 rounded-md font-bold text-white">
                        ถอน
                    </button>
                </div>
            </form>
        </div>
    </div>

    <DepositModal ref="modalRef" />

    <WithdrawModal ref="modalRef" />
</template>
