<script setup>
import TransactionHistory from '~/components/TransactionHistory.vue';

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

<template>
  <TransactionHistory />
</template>
