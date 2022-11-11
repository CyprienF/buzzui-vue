<template>
  <button class="button" :class="computedClasses" :disabled="disabled">
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
  disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
  disabled: config.defaultDisabled as boolean,
});

const color = computed(() => getInvertColor(props.color));
const backgroundColor = computed(() => getColor(props.color));
const computedClasses = computed(() => {
  return { button__disabled: props.disabled };
});
</script>

<style scoped lang="scss">
.button {
  color: v-bind(color);
  background-color: v-bind(backgroundColor);

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-weight: 600;
  padding: 0.6rem 3rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;

  &__disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
