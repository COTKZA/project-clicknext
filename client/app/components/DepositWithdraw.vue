<template>
    <div class="border border-red-500 w-full p-4">
        <div class="flex items-center justify-center">
            <span class="text-gray-900 font-medium">
                จำนวนเงินคงเหลือ 1,000,000 บาท
            </span>
        </div>

        <div class="mt-5 flex items-center justify-center">
            <form action="">
                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">
                    จำนวนเงิน *
                </label>
                <input type="number" name="amount" id="amount"
                    class="bg-white border-2 border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-200 focus:border-gray-400 block w-full p-2"
                    placeholder="กรอกจำนวนเงิน" required />

                <div class="mt-5 flex items-center gap-2">

                    <button class="w-full bg-green-500 p-1 rounded-md text-white">ฝาก</button>
                    <button class="w-full bg-red-500 p-1  rounded-md text-white">ถอน</button>
                </div>
            </form>
        </div>
    </div>
</template>
