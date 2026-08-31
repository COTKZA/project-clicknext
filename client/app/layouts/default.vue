<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';

</script>

<template>
  <div>
    <div >
        <Navbar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
