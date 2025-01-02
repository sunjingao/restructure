<template>
  <div>
    <h1>对比</h1>
    通过对比改造前后的效果，方便了解改造成果。

    <h2>一：资源大小</h2>

    <p>对比新旧版本的基座项目的代码量，为不包含node_modules等无关内容的大小</p>

    <table class="border-[1px] border-solid border-[#f5f5f5]">
      <tr class="bg-[#f5f5f5]">
        <th class="text-left p-[10px]">旧版</th>
        <th class="text-left p-[10px]">新版</th>
      </tr>
      <tr>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/old-size.png')" />
        </td>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/new-size.png')" />
        </td>
      </tr>
    </table>

    <h2>二：首屏加载</h2>
    <p>对比新旧版本的首屏加载的时间，在视频里浏览器的下面有展示</p>
    <table class="border-[1px] border-solid border-[#f5f5f5]">
      <tr class="bg-[#f5f5f5]">
        <th class="text-left p-[10px]">旧版</th>
        <th class="text-left p-[10px]">新版</th>
      </tr>
      <tr>
        <td class="p-[10px]">
          <video width="320" controls>
            <source src="/public/mp4/old.mp4" type="video/mp4" />
          </video>
        </td>
        <td class="p-[10px]">
          <video width="320" controls>
            <source src="/public/mp4/new.mp4" type="video/mp4" />
          </video>
        </td>
      </tr>
    </table>

    <h2>三：排版对比</h2>
    <p>
      对比新旧版本的排版布局效果。因为UI未能对原排版为做出合适调整。结合自身经验，独自对整体效果进行了设计。
    </p>
    <table class="border-[1px] border-solid border-[#f5f5f5]">
      <tr class="bg-[#f5f5f5]">
        <th class="text-left p-[10px]">旧版</th>
        <th class="text-left p-[10px]">新版</th>
      </tr>
      <tr>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/old-main.jpeg')" />
        </td>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/new-main.png')" />
        </td>
      </tr>
    </table>

    <h2>四：列表页对比</h2>
    <p>对比新旧版本的列表页效果。新版本为使用内部组件库的效果</p>
    <table class="border-[1px] border-solid border-[#f5f5f5]">
      <tr class="bg-[#f5f5f5]">
        <th class="text-left p-[10px]">旧版</th>
        <th class="text-left p-[10px]">新版</th>
      </tr>
      <tr>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/old-page.png')" />
        </td>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/new-page.png')" />
        </td>
      </tr>
    </table>

    <h2>五：表单对比</h2>
    <p>对比新旧版本的表单页效果。新版本为使用内部组件库的效果</p>
    <table class="border-[1px] border-solid border-[#f5f5f5]">
      <tr class="bg-[#f5f5f5]">
        <th class="text-left p-[10px]">旧版</th>
        <th class="text-left p-[10px]">新版</th>
      </tr>
      <tr>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/old-form.png')" />
        </td>
        <td class="p-[10px]">
          <m-image :width="320" :src="getPublicAssetURL('/png/new-form.png')" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { getPublicAssetURL } from '@/util/index.ts';
</script>

<style scoped></style>
