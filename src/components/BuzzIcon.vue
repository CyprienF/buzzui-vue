<template>
  <div class="icon"><font-awesome-icon :icon="icon" /></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Color } from '../types/color';
import { Size } from '../types/size';
import { config } from '../utils/config';

import { useColor } from '../composables/useColor';

const { getColor } = useColor();

interface Props {
  style: string;
  icon: string;
  sharp: boolean;
  color: Color;
  size: Size;
}

const props = withDefaults(defineProps<Props>(), {
  pack: 'fa-solid',
  icon: 'fa-user',
  color: config.defaultColor as Color,
  size: config.defaultSize as Size,
});

const icon = computed(() => `${props.pack} ${props.icon}`);
const color = computed(() => getColor(props.color));
</script>

<style scoped lang="scss">
.icon {
  color: v-bind(color);
}
</style>
