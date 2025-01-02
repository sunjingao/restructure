<template>
  <iframe class="w-[100%] h-[100%]" :src="getPublicAssetURL('/pdf/step4.pdf')" />
</template>

<script setup>
import { getPublicAssetURL } from '@/util/index.ts';
</script>

<style scoped></style>
