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
      <div class="centerlayout">
        <div class="address">
          <div style="margin-right:16px">
            <i class="el-icon-map-location"></i>
            <span>地址</span>
          </div>
          <el-dropdown>
            <span style="font-size:12px;margin-right:16px"
                  class="el-dropdown-link">
              <i class="el-icon-mobile-phone"></i>手机版
            </span>
            <el-dropdown-menu slot="dropdown">
              <img src="@/assets/homeimg/ewm.jpg"
                   width="150"
                   height="150">
            </el-dropdown-menu>
          </el-dropdown>
          <div style="margin-right:16px;cursor: pointer;">请登录</div>
          <div style="cursor: pointer;">免费注册</div>

        </div>
        <div class="order-goods">
          <span style="cursor: pointer;">设计师入驻</span>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown>
            <span style="font-size:12px;"
                  class="el-dropdown-link">
              我的订单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的订单1</el-dropdown-item>
              <el-dropdown-item>我的订单2</el-dropdown-item>
              <el-dropdown-item>我的订单3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown>
            <span style="font-size:12px;"
                  class="el-dropdown-link">
              客服中心<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>客服中心</el-dropdown-item>
              <el-dropdown-item>客服中心</el-dropdown-item>
              <el-dropdown-item>客服中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown>
            <span style="font-size:12px;"
                  class="el-dropdown-link">
              关于我们<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>关于我们</el-dropdown-item>
              <el-dropdown-item>关于我们</el-dropdown-item>
              <el-dropdown-item>关于我们</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown>
            <span style="font-size:12px;"
                  class="el-dropdown-link">
              网站导航<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>网站导航</el-dropdown-item>
              <el-dropdown-item>网站导航</el-dropdown-item>
              <el-dropdown-item>网站导航</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="topsearch">
      <div class="centerlayout">
        <div class="log"></div>
        <div class="searchbox">
          <div class="search-top">
            <el-autocomplete class="inline-input"
                             v-model="state2"
                             prefix-icon="el-icon-search"
                             size="small"
                             :fetch-suggestions="querySearch"
                             placeholder="输入想要的包包"
                             :trigger-on-focus="false"
                             @select="handleSelect">

            </el-autocomplete>
            <el-button size="small"
                       style="background:#040000;color:#fff;border-radius:0;margin-left:-6px;width:76px;height:34px;font-size:14px">搜产品</el-button>
            <button style="border:none;text-align:center;background:#898989;color:#fff;border-radius:0;margin-left:4px;width:76px;height:34px;font-size:14px">搜设计师</button>
            <div class="gwcar">
              <span class="iconfont icongouwuche"></span>
              <span>购物车</span>
              <span>5</span>
            </div>
          </div>
          <div class="search-result"></div>
        </div>
      </div>
    </div>
    <div class="topnav"></div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      isolder: true,
      state2: '',
      restaurants: [],

    }
  },
  created () {

  },
  mounted () {
    this.restaurants = this.loadAll();

  },
  methods: {
    querySearch (queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll () {
      return [
        { "value": "小花包", "address": "长宁区新渔路144号" },
        { "value": "双肩包", "address": "上海市长宁区淞虹路661号" },
        { "value": "当季新款", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },

      ];
    },
    handleSelect (item) {
      console.log(item);
    },

  },
}
</script>
<style lang="scss">
.inline-input {
  .el-input__inner {
    border-radius: 0;
    width: 400px;
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
  .centerlayout {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
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
    .centerlayout {
      .address,
      .order-goods {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .topsearch {
    width: 100%;
    height: 107px;
    line-height: 107px;
    display: flex;
    justify-content: center;

    .centerlayout {
      // background: red;
      .log {
        width: 162px;
        height: 100%;
        background: url("../../assets/homeimg/logo.gif") no-repeat;
        background-size: 100% 100%;
      }
      .searchbox {
        display: flex;
        flex-direction: column;
        height: 100%;
        .search-top {
          display: flex;
          justify-content: flex-start;
          .inline-input {
            .el-input__inner {
              border-radius: 0;
            }
          }
        }
      }
    }
  }
}
</style>


