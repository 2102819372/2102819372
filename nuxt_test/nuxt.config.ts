/*
 * @Author: 冷 晓飞 2102819372@qq.com
 * @Date: 2023-12-04 00:59:47
 * @LastEditors: 冷 晓飞 2102819372@qq.com
 * @LastEditTime: 2023-12-04 02:56:41
 * @FilePath: /2102819372/nuxt_test/nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  srcDir: "src/",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },
});
