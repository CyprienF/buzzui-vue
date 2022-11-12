<template>
  <div class="icon" :class="size">
    <FontAwesomeIcon :icon="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Color } from '../types/color';
import { Pack } from '../types/pack';
import { Size } from '../types/size';
import { config } from '../utils/config';

import { useColor } from '../composables/useColor';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, fab, far);

const { getColor } = useColor();

interface Props {
  pack?: Pack;
  icon?: string;
  color?: Color;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  pack: 'fa-solid' as Pack,
  icon: 'fa-user' as string,
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
});

const icon = computed(() => `${props.pack} ${props.icon}`);
const color = computed(() => getColor(props.color));
const size = computed(() => `icon__${props.size}`);
</script>

<style scoped lang="scss">
.icon {
  color: v-bind(color);
  font-size: 1.25rem;

  &__small {
    font-size: 1rem;
  }

  &__medium {
    font-size: 1.5rem;
  }

  &__large {
    font-size: 1.75rem;
  }
}
</style>
