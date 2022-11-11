<template>
  <BuzzButton color="discord" size="regular" shape="rounded" :outlined="true">
    <BuzzIcon pack="fa-brands" icon="fa-discord" color="discord" size="regular" />
    Discord
  </BuzzButton>
</template>

<script setup lang="ts">
import BuzzButton from '@/components/BuzzButton.vue';
import BuzzIcon from '@/components/BuzzIcon.vue';
</script>

<style scoped></style>
