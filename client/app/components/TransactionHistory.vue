<script setup lang="ts">
import {
  useTransactionStore,
} from "~/stores/transactions.ts";
import DeleteTransactionModal from "./transactions/DeleteTransactionModal.vue";
import EditTransactionModa from "./transactions/EditTransactionModa.vue";

// fetch Transaction
const transactionStore = useTransactionStore();
const { data: transactions } = storeToRefs(transactionStore);

const editModalRef = ref<any>(null);
const deleteModalRef = ref<any>(null);

const transactionId = ref<number | null>(null);

const openEditTransactionModal = async (id: number) => {
  if (!id) return;

  transactionId.value = id;

  await nextTick();

  editModalRef.value?.open();
};

const openDeleteTransactionModal = async (id: number) => {
  if (!id) return;

  transactionId.value = id;

  await nextTick();

  deleteModalRef.value?.open();
};
</script>
<template>
  <div>
    <h1 class="font-bold mb-1 text-gray-900">ประวัติรายการฝากถอน</h1>
    <div
      class="w-full relative overflow-x-auto bg-white border border-gray-800"
    >
      <table class="w-full text-sm text-center border-collapse">
        <thead class="border-b border-gray-800">
          <tr>
            <th class="px-3 py-2 border border-gray-800 font-medium">
              DateTime
            </th>
            <th class="px-3 py-2 border border-gray-800 font-medium">Amount</th>
            <th class="px-3 py-2 border border-gray-800 font-medium">Status</th>
            <th class="px-3 py-2 border border-gray-800 font-medium">Email</th>
            <th class="px-3 py-2 border border-gray-800 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="transactions.length === 0">
            <td colspan="5" class="px-3 py-6 text-center text-gray-500">
              ไม่มีรายการฝาก/ถอน
            </td>
          </tr>
          <tr
            v-for="item in transactions"
            :key="item.id"
            class="border-b border-gray-800"
          >
            <td class="px-3 py-2 border border-gray-800">
              {{ item.dateTime }}
            </td>
            <td class="px-3 py-2 border border-gray-800">
              {{ item.amount }}
            </td>
            <td class="px-3 py-2 border border-gray-800">
              <span
                :class="
                  item.status === 'deposit' ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ item.status === "deposit" ? "ฝาก" : "ถอน" }}
              </span>
            </td>
            <td class="px-3 py-2 border border-gray-800">
              {{ item.email }}
            </td>
            <td class="px-3 py-2 border border-gray-800">
              <button
                v-if="item.status === 'deposit'"
                @click="openEditTransactionModal(item.id)"
                type="button"
                class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium"
              >
                Edit
              </button>
              <button
                v-if="item.status === 'withdraw'"
                @click="openDeleteTransactionModal(item.id)"
                type="button"
                class="bg-[#4d4d4d] text-white px-4 py-1.5 rounded-md font-medium"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="transactions.length > 0"
      class="flex items-center gap-1 font-medium text-gray-900 mt-1"
    >
      แสดง <span> 1 ถึง {{ transactions.length }}</span> จาก
      <span>{{ transactions.length }}</span> รายการ
    </div>
  </div>

  <EditTransactionModa ref="editModalRef" :id="transactionId" />

  <DeleteTransactionModal ref="deleteModalRef" :id="transactionId" />
</template>
