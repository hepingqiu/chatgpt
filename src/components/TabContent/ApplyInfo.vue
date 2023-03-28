<!--
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-28 14:04:21
 * @FilePath: \chatgpt\src\components\TabContent\ApplyInfo.vue
-->
<template>
  <div class="applyContainer">
    <div class="apply-title">
            {{ title }}
    </div>
    <div v-for="catagory in applyInofo" :key="catagory.title" class="apply-content">
      <CatagoryInfo :info="catagory" />
    </div>
  </div>
</template>

<script>
import { applyInofo , info } from "@/data/info";
import CatagoryInfo from "./CatagoryInfo.vue";
export default {
  name: "ApplyInfo",
  components: {
    CatagoryInfo,
  },
  data() {
    return {
      applyInofo: applyInofo,
      title: info.applyTitle
    };
  },
};
</script>

<style scoped>

.applyContainer {
    height: 100%;
    overflow: auto;
}
.apply-title{
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: sticky;
    background-color: #282c34;
    color: #fff;
}

.apply-content{
    padding-left: 10px;
    padding-right: 10px;
}
</style>