<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Color } from '../types/color';
import { Size } from '../types/size';
import { config } from '../utils/config';

interface Props {
  color: Color;
  size: Size;
}

const props = withDefaults(defineProps<Props>(), {
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
});

const color = ref<string>(props.color);
</script>

<style scoped lang="scss">
.button {
  color: v-bind(color);
}
</style>
