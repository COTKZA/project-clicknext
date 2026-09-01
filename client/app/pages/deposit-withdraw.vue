<script setup>
import DepositWithdraw from "~/components/DepositWithdraw.vue";

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>
<template>
  <DepositWithdraw />
</template>
