<template>
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
</template>

<script>
export default {
  name: 'topheader'
}
</script>
<style lang="scss" scoped>
.centerlayout {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .address,
  .order-goods {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>

