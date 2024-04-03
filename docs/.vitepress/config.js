import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'gf-naive docs',
  description: 'Vue3 Management System Template',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/index' },
      { text: '后端', link: '/server/index' }
    ],

    // sidebar: {
    //   '/front/index': [
    //     {
    //       text: '前端',
    //       items: [{ text: '准备', link: '/front/index' }]
    //     }
    //   ],
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/clgwxg/gf-naive-template' }]
  }
})
