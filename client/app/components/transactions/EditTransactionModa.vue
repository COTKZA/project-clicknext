<script setup>
import { ref } from 'vue';

const isOpen = ref(false)

const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)

defineExpose({ open, close })

const amount = ref();

// validate amount
const handleInputAmount = (e) => {
    const value = parseFloat(e.target.value);
    if (value > 100000) {
        amount.value = 100000
    }
}

</script>
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
        <div class="w-full max-w-md overflow-hidden rounded-lg bg-white p-6 border border-gray-300 mx-3">
            <div class="flex flex-col gap-2">
                <h2 class="text-lg font-bold">แก้ไขจำนวนเงินฝาก</h2>
                <form action="">
                    <div class="flex flex-col">
                        <span class="text-md font-medium">ของวันที่ 05/02/2022 10:10:53</span>
                        <span class="text-md font-medium">จากอีเมล admin@gmail.com</span>
                    </div>

                    <div>
                        <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">
                            จำนวนเงิน *
                        </label>
                        <input type="number" name="amount" id="amount" v-model.number="amount" min="1" max="100000"
                            step="1" inputmode="decimal" pattern="[0-9]" @input="handleInputAmount"
                            class="bg-white border-2 border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-200 focus:border-gray-400 block w-full p-1"
                            placeholder="กรอกจำนวนเงิน" required />
                    </div>

                    <div class="flex items-center justify-start mt-4">
                        <button type="submit"
                            class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium">ยืนยัน</button>
                        <button type="button" @click="close"
                            class="text-gray-900 px-4 py-1.5 rounded-md font-medium">ยกเลิก</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>