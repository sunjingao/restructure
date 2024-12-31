<template>
  <div>
    <h1>发布</h1>
    为保障上线后业务方不受影响，上线前 及 上线时都做了充分的准备。

    <h2>一：内测</h2>
    <p>
      因担心测试人员没有进行全量测试，从而影响业务的开发，所以找了十几位可以覆盖各个模块的业务人员进行内测。增加测试覆盖面。
    </p>
    <p>以下为与内测人员沟通群。</p>
    <m-image class="mt-[10px]" :width="500" :src="getAssetURL('./asset/png/test.png')" />

    <h2>二：上线</h2>
    <p>为防止测试不全面的情况，新老项目在线上并行两周。可以丝滑过度到最新架构。</p>
    <p>以下为正式上线前的公告邮件。</p>
    <m-image :width="500" :src="getAssetURL('./asset/png/notice.png')" />
  </div>
</template>

<script setup>
function getAssetURL(image) {
  return new URL(image, import.meta.url).href;
}
</script>

<style scoped></style>
