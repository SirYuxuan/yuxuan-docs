import {DefaultTheme} from "vitepress";

export function sidebarPublicApi(): DefaultTheme.SidebarItem[] {
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

export function sidebarOpenSource(): DefaultTheme.SidebarItem[] {
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