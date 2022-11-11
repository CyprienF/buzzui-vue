<template>
  <img class="avatar" :src="image" :class="computedClasses" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Size } from '../types/size';
import { Shape } from '../types/shape';
import { config } from '../utils/config';

interface Props {
  image: string;
  size?: Size;
  shape?: Shape;
}

const props = withDefaults(defineProps<Props>(), {
  image: config.defaultAvatarImage as string,
  size: config.defaultSize as Size,
  shape: config.defaultShape as Shape,
});

const image = computed(() => props.image);
const computedClasses = computed(() => {
  return {
    avatar__small: props.size === 'small',
    avatar__medium: props.size === 'medium',
    avatar__large: props.size === 'large',
    avatar__rounded: props.shape === 'rounded',
  };
});
</script>

<style scoped lang="scss">
.avatar {
  width: 3rem;

  border-radius: 0.3rem;

  &__small {
    width: 2.5rem;
  }

  &__medium {
    width: 3.5rem;
  }

  &__large {
    width: 4rem;
  }

  &__rounded {
    border-radius: 20rem;
  }
}
</style>
