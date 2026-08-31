<script setup>
import DeleteTransactionModal from './transactions/DeleteTransactionModal.vue';
import EditTransactionModa from './transactions/EditTransactionModa.vue';


const modalRef = ref(null);

const openEditTransactionModal = () => {
    modalRef.value?.open()
}

const openDeleteTransactionModal = () => {
    modalRef.value?.open()
}
</script>
<template>
    <div>
        <h1 class="font-bold mb-1 text-gray-900">ประวัติรายการฝากถอน</h1>
        <div class="w-full relative overflow-x-auto bg-white border border-gray-800">
            <table class="w-full text-sm text-center border-collapse">
                <thead class="border-b border-gray-800">
                    <tr>
                        <th class="px-3 py-2 border border-gray-800 font-medium">DateTime</th>
                        <th class="px-3 py-2 border border-gray-800 font-medium">Amount</th>
                        <th class="px-3 py-2 border border-gray-800 font-medium">Status</th>
                        <th class="px-3 py-2 border border-gray-800 font-medium">Email</th>
                        <th class="px-3 py-2 border border-gray-800 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-800">
                        <td class="px-3 py-2 border border-gray-800">
                            06/06/2022 10:19:53
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            20,000
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            <span class="text-green-500">ฝาก</span>
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            test@test.com
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            <button @click="openEditTransactionModal" type="button" class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium">
                                Edit
                            </button>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-800">
                        <td class="px-3 py-2 border border-gray-800">
                            06/06/2022 10:19:53
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            20,000
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            <span class="text-red-500">ถอน</span>
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            test@test.com
                        </td>
                        <td class="px-3 py-2 border border-gray-800">
                            <button type="button" @click="openDeleteTransactionModal" class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex items-center gap-1 font-medium text-gray-900 mt-1">
            แสดง <span> 1 ถึง 3</span> จาก <span>3</span> รายการ
        </div>
    </div>

    <EditTransactionModa ref="modalRef" />

    <DeleteTransactionModal ref="modalRef"/>
</template>