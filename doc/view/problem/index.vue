<template>
  <div>
    <h1>问题梳理</h1>
    <p>因为对此系统一无所知，所以梳理了全部页面来了解展示问题、代码问题。以下为梳理过程。</p>

    <h2>一：全部页面</h2>
    <p>因为对此平台一无所知，也无人交接，所以看了全部的页面，来了解相关功能，总结平台的问题。</p>
    <p>以下为全部页面内容。</p>
    <iframe :src="getPublicAssetURL('/pdf/all-page.pdf')" class="w-[660px] h-[400px]" />

    <h2>二：整体架构</h2>
    <p>
      前端为以wujie、vue为框架的微前端项目，有1个基座，9个子项目，共计161个页面。子项目是以项目组进行划分的。
    </p>
    <p>以下是项目划分</p>
    <m-image :width="660" :src="getPublicAssetURL('/png/framework.png')" />

    <h2>三：问题梳理</h2>
    <p>经过阅读相关代码，总结了当前项目在 展示、代码 上的问题。</p>
    <h3>3.1 展示问题</h3>
    <p>以下为梳理出的展示问题 及 相关规则（最终规则是根据自身经验确定的，集成到了组件库中）</p>
    <div class="flex;">
      <iframe :src="getPublicAssetURL('/pdf/page-problem.pdf')" class="w-[400px] h-[400px]" />
      <iframe
        :src="getPublicAssetURL('/pdf/page-solution.pdf')"
        class="w-[400px] h-[400px] ml-[10px]"
      />
    </div>
    <h3>3.2 代码问题</h3>
    <p>
      1：项目分隔是以项目组进行区分的，原来有一个基座，9个子项目。但后面有些项目组取消了。这种页面划分非常不合适。
    </p>
    <p>
      2：微前端是通过wujie的方式进行展示的，基座与子项目之间的路由不互通。原来是通过父子间交互保持统一。并且由于实现并不合理，导致了交互非常复杂，阻碍子项目的页面展示。
    </p>
    <p>
      3：原来的基座项目是在网上下载的一个开源项目，进行的二次开发。有非常多的无用代码；基座有子页面的代码，难以扩展。
    </p>
    <p>4：全局缓存中存在着大量无用的状态。</p>
    <p>5：子项目的宽度等内容依赖于基座的菜单宽度，是计算出来的。难以扩展。</p>
    <p>7：子项目加载时，页面为空白的时间较长，用户不清楚当前进度。</p>
    <p>8：基座上存在Bug，如面包屑等组件存在bug，跳转位置不确定 等等。</p>
    <p>9：url存在多余的部分。</p>
  </div>
</template>

<script setup>
import { getPublicAssetURL } from '@/util/index.ts';
</script>

<style scoped></style>
