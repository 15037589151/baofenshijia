<template>
  <div class="centerlayout">
    <div class="shoplist">
      <i class="el-icon-s-fold"></i>
      <span>商品之家</span>
    </div>
    <div class="targeturl"
         style="margin-left:62px">
      <div class="itemmenu"
           :style="{color:activetype==index?'red':''}"
           @click="targeto(iteam,index)"
           v-for="(iteam,index) in menulist"
           :key="index">{{iteam.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topnav',
  data () {
    return {
      activetype: 0,
      menulist: [
        {
          name: '首页',
          id: '1'
        },
        {
          name: '设计师之家',
          id: '2'
        },
        {
          name: '网红之家',
          id: '3'
        },
        {
          name: '包包精选',
          id: '4'
        },
        {
          name: '众筹/预售',
          id: '5'
        },
        {
          name: '定制之家',
          id: '6'
        },
        {
          name: '超值之家',
          id: '7'
        },
        {
          name: '我要分享',
          id: '8'
        }
      ]
    }
  },
  methods: {
    targeto (row, index) {
      this.activetype = index
    },
  }
}
</script>
<style lang="scss" scoped>
.centerlayout {
  display: flex;
  justify-content: flex-start;
  // background: red;
  width: 1200px;
  height: 43px;
  .shoplist {
    background: red;
    color: #fff;
    width: 162px;
    height: 43px;
    font-size: 14px;
    line-height: 43px;
    cursor: pointer;
  }
  .targeturl {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: #000;
    align-items: center;
    .itemmenu {
      margin-right: 60px;
      cursor: pointer;
    }
  }
}
</style>

