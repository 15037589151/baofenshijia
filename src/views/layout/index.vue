<template>
  <div class="layout">
    <div v-if="isolder"
         class="toptip">
      <div></div>
      <div style="font-size:14px;color:#fff">注册成为包粉设计会员，即可获得100元礼券，订单满1000元可免费获得活动区任意礼品1件</div>
      <div style="color:#666666;margin-right:19px;cursor: pointer;"
           class="iconfont iconguanbi"
           @click="isolder=false"></div>
    </div>
    <div class="topheader">
      <topheader></topheader>
    </div>
    <div class="topsearch">
      <topsearch></topsearch>
    </div>
    <div class="topnav">
      <topnav></topnav>
    </div>
    <div class="appMain">
      <app-main></app-main>
    </div>

  </div>
</template>
<script>
import topheader from "./components/topheader";
import topsearch from "./components/topsearch";
import topnav from "./components/topnav";
export default {
  components: {
    topsearch,
    topheader,
    topnav
  },
  data () {
    return {
      isolder: true,

    }
  },
  created () {

  },

  methods: {


  },
}
</script>
<style lang="scss">
.inline-input {
  height: 32px;
  .el-input__inner {
    border-radius: 0;
    width: 400px;
  }
}
.el-menu-demo {
  height: 43px;
  border-bottom: none !important;
  .el-menu-item {
    height: 43px;
  }
}
</style>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .toptip {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background: #000;
    line-height: 40px;
  }

  .topheader {
    width: 100%;
    height: 30px;
    background: #f5f5f5;
    border-bottom: 1px solid #dddddd;
    color: #666666;
    line-height: 30px;
    display: flex;
    justify-content: center;
  }
  .topsearch {
    width: 100%;
    height: 107px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .topnav {
    width: 100%;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>


