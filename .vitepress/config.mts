import { defineConfig, type DefaultTheme } from 'vitepress'
export default defineConfig({
  title: "雨轩软件文档",
  description: "雨轩软件的操作文档",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav:nav(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    sidebar: {
      '/public-api/': { base: '/public-api/', items: sidebarPublicApi() },
      '/open-source/': { base: '/open-source/', items: sidebarOpenSource() }
    },
    editLink: {
      pattern: 'https://github.com/sirYuxuan/yuxuan-vue-wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sirYuxuan/yuxuan-vue-wiki' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '公开API',
      link: '/public-api/index',
      activeMatch: '/public-api/'
    },
    {
      text: '开源软件',
      link: '/open-source/index',
      activeMatch: '/open-source/'
    },
  ]
}

function sidebarPublicApi(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '欢迎使用',
      collapsed:false,
      items:[
        {text: '快速上手', link: 'welcome'}
      ]
    },
    {
      text: '文本API',
      collapsed: false,
      items: [
        { text: '每日一言', link: 'text#每日一言' },
      ]
    },
    {
      text: '图片API',
      collapsed: false,
      items: [
        { text: '获取Bing当日壁纸', link: 'get-bing-image' },
      ]
    },
  ]
}

function sidebarOpenSource(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Java项目',
      collapsed: false,
      items: [
        { text: 'wife-push', link: 'wife-push' },
      ]
    }
  ]
}