<script setup lang="ts">
import { computed } from 'vue';
import { zhCN } from 'mo-web-components';
import { useRoute } from 'vue-router';
import PageMenu from './component/menu/index.vue';
import { NOT_SHOW_IN_ROUTERS } from '@/router';

const route = useRoute();

const isShowMenu = computed(() => {
  return NOT_SHOW_IN_ROUTERS.every((item) => {
    return item.path !== route.path;
  });
});
</script>

<template>
  <m-config-provider :locale="zhCN">
    <div class="h-100% flex overflow-hidden">
      <div v-if="isShowMenu" class="w-160px h-100% overflow-y-auto flex flex-col">
        <PageMenu />
      </div>
      <div class="flex-1 h-100% p-10px overflow-y-auto">
        <div id="container" class="h-100% overflow-auto translate-x-0 translate-y-0">
          <router-view class="markdown-body" />
        </div>
      </div>
    </div>
  </m-config-provider>
</template>

<style scoped lang="scss"></style>
