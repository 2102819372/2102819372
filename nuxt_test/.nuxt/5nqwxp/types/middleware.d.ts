import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../../node_modules/.pnpm/nuxt@3.8.0_@types+node@20.8.10_eslint@8.53.0_less@4.2.0_typescript@5.3.2_vite@4.5.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}