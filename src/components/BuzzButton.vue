<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Color } from '../types/color';
import { Size } from '../types/size';
import { config } from '../utils/config';

import { useColor } from '../composables/useColor';

const { getColor, getInvertColor } = useColor();

interface Props {
  color: Color;
  size: Size;
}

const props = withDefaults(defineProps<Props>(), {
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
});

const color = computed(() => getInvertColor(props.color));
const backgroundColor = computed(() => getColor(props.color));
</script>

<style scoped lang="scss">
.button {
  color: v-bind(color);
  background-color: v-bind(backgroundColor);

  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem 2.25rem;
  border-radius: 0.4rem;
  border: none;
}
</style>
