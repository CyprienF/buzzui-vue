<template>
  <img class="avatar" :src="image" :class="computedClasses" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Shape } from '../types/shape';
import { config } from '../utils/config';

interface Props {
  image: string;
  shape?: Shape;
}

const props = withDefaults(defineProps<Props>(), {
  image: config.defaultAvatarImage as string,
  shape: config.defaultShape as Shape,
});

const image = computed(() => props.image);
const computedClasses = computed(() => {
  return {
    avatar__rounded: props.shape === 'rounded',
  };
});
</script>

<style scoped lang="scss">
.avatar {
  width: 4rem;
  height: 4rem;

  border-radius: 0.3rem;

  &__rounded {
    border-radius: 20rem;
  }
}
</style>
