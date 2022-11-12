<template>
  <button class="button" :class="computedClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Color } from '../types/color';
import { Size } from '../types/size';
import { Shape } from '../types/shape';
import { config } from '../utils/config';

import { useColor } from '../composables/useColor';

const { getColor, getInvertColor } = useColor();

interface Props {
  color?: Color;
  size?: Size;
  shape?: Shape;
  disabled?: boolean;
  outlined?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
  shape: config.defaultShape as Shape,
  disabled: config.defaultButtonDisabled as boolean,
  outlined: config.defaultButtonOutlined as boolean,
});

const color = computed(() => getInvertColor(props.color));
const backgroundColor = computed(() => getColor(props.color));
const computedClasses = computed(() => {
  return {
    button__small: props.size === 'small',
    button__medium: props.size === 'medium',
    button__large: props.size === 'large',
    button__rounded: props.shape === 'rounded',
    button__disabled: props.disabled,
    button__outlined: props.outlined,
  };
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
  padding: 0.4rem 2.5rem;
  border-radius: 0.4rem;
  border: none;

  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }

  &__small {
    padding: 0.2rem 2rem;
  }

  &__medium {
    padding: 0.6rem 3rem;
  }

  &__large {
    padding: 0.8rem 3.5rem;
  }

  &__rounded {
    border-radius: 20rem;
  }

  &__disabled {
    cursor: not-allowed !important;
    opacity: 0.5;
  }

  &__outlined {
    color: v-bind(backgroundColor);
    border: 1px solid v-bind(backgroundColor);
    background-color: transparent;
  }
}
</style>
