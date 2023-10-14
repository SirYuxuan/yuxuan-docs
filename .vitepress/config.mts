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
      '/eve-manager/': { base: '/eve-manager/', items: sidebarEveManager() }
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
      text: 'EVE管理系统',
      link: '/eve-manager/index',
      activeMatch: '/eve-manager/'
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

function sidebarEveManager(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}