
import { updateAppConfig } from '#app'
import { defuFn } from '/workspace/2102819372/nuxt_test/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "225b8aae-c24c-4ebe-921d-b487c691d5b3"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
