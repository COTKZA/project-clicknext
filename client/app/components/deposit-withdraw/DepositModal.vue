<script setup>
import { ref } from 'vue';

const isOpen = ref(false)

const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)

defineExpose({ open, close })

</script>
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
        <div class="w-full max-w-md overflow-hidden rounded-lg bg-white p-6 border border-gray-300">
            <div class="flex flex-col gap-2">
                <h2 class="text-lg font-bold">ยืนยันการฝาก</h2>

                <span class="text-md font-medium">จำนวนเงิน 10,000 บาท</span>

                <div class="flex items-center justify-start">
                    <button type="submit" class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium">ยืนยัน</button>
                    <button type="button" @click="close" class="text-gray-900 px-4 py-1.5 rounded-md font-medium">ยกเลิก</button>
                </div>
            </div>
        </div>
    </div>
</template>