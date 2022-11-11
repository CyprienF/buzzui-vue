<template>
  <BuzzButton color="primary" size="regular" :disabled="true">
    <BuzzIcon pack="fa-brands" icon="fa-github" color="white" size="regular" />
    Github
  </BuzzButton>
</template>

<script setup lang="ts">
import BuzzButton from '@/components/BuzzButton.vue';
import BuzzIcon from '@/components/BuzzIcon.vue';
</script>

<style scoped></style>
