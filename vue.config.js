const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  publicPath: "./", // 部署项目路径
  // baseUrl: process.env_NODE_ENV == 'production' ? '/vehiclerepair/' : '', // 部署项目路径
  devServer: {
    port: 8080, // 端口号
    // host: 'localhost',
    open: false, //配置自动启动浏览器
    proxy: {
      "/vehiclerepair": {
        // target: 'http://101.231.47.117:50067/vehiclerepair',
        target: "http://10.1.30.208:50067/vehiclerepair",

        // target: 'http://192.168.1.115:8080/vehiclerepair',
        // target: 'http://10.1.30.207:50045/vehiclerepair',
        // target: 'http://10.1.30.68:8080/vehiclerepair',
        // target: 'http://10.1.30.156:8080/vehiclerepair',
        changeOrigin: true,
        pathRewrite: {
          "^/vehiclerepair": "/"
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
  },
  configureWebpack: {
    // webpack 配置项
    // resolve: {
    //   alias: {
    //     vue$: "vue/dist/vue.esm.js",
    //     "@": resolve("src"),
    //     views: resolve("src/views")
    //   }
    // },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "@/assets/css/global.scss";`
  //     }
  //   }
  // }
};
