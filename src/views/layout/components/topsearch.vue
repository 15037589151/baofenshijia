<template>
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
        <button style="border:none;background:#040000;color:#fff;border-radius:0;margin-left:-6px;width:76px;height:32px;font-size:14px">搜产品</button>
        <button style="border:none;text-align:center;background:#898989;color:#fff;border-radius:0;margin-left:4px;width:76px;height:32px;font-size:14px">搜设计师</button>
        <div class="gwcar">
          <span class="iconfont icongouwuche"></span>
          <span>购物车</span>
          <span class="shopnum">05</span>
        </div>
      </div>
      <div class="search-result">
        <span>单肩包</span>
        <span>双肩包</span>
        <span>迷你包</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topsearch',
  data () {
    return {
      state2: '',
      restaurants: [],
    }
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

  }
}
</script>
<style lang="scss" scoped>
.centerlayout {
  display: flex;
  justify-content: space-between;
  // background: red;
  width: 1200px;
  height: 107px;
  .log {
    width: 162px;
    height: 107px;
    background: url("../../../assets/homeimg/logo.gif") no-repeat;
    background-size: 100% 100%;
  }
  .searchbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 107px;
    .search-top {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      height: 68px;
      .gwcar {
        border: 1px solid gray;
        box-sizing: border-box;
        padding: 6px 10px;
        border-radius: 16px;
        margin-left: 90px;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .shopnum {
          width: 18px;
          height: 18px;
          background: red;
          box-sizing: border-box;
          border-radius: 50%;
          color: #fff;
          font-size: 8px;
          text-align: center;
          line-height: 18px;
          margin-left: 6px;
        }
      }
      .gwcar:hover {
        border-radius: 0;
      }
    }
    .search-result {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>

