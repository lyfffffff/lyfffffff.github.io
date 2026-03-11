import { defineConfig } from 'vitepress'
import UnoCSS from '@unocss/vite'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const juejinSvg = readFileSync(resolve(__dirname, '../public/juejin.svg'), 'utf-8')
const csdnSvg = readFileSync(resolve(__dirname, '../public/csdn.svg'), 'utf-8')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LYFFFF的博客',
  description: '记录生活，记录学习，记录成长',
  lang: 'zh-CN',

  // 部署到 lyfffffff.github.io（用户站点，根路径）
  base: '/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: '工具', link: '/tools/' },
      { text: '博客', link: '/blog' },
      { text: '关于', link: '/about' },
    ],

    // 侧边栏
    sidebar: {
      '/notes/': [
        {
          text: 'Notes',
          items: [
            { text: '概览', link: '/notes/' },
            { text: 'JavaScript', link: '/notes/javascript' },
            { text: 'CSS', link: '/notes/css' },
            { text: 'Linux', link: '/notes/linux' },
          ],
        },
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: '概览', link: '/tools/' },
            { text: 'AI Tools', link: '/tools/ai-tools' },
            { text: 'Developer Tools', link: '/tools/dev-tools' },
            { text: 'Learning Resources', link: '/tools/learning-resources' },
          ],
        },
      ],
    },

    // 社交链接（请将链接替换为你的个人主页）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyfffffff' },
      {
        icon: { svg: juejinSvg },
        link: 'https://juejin.cn/user/171977275610190',
        ariaLabel: '掘金',
      },
      {
        icon: { svg: csdnSvg },
        link: 'https://blog.csdn.net/LYFFFF_?spm=1000.2115.3001.5343',
        ariaLabel: 'CSDN',
      },
    ],

    // 暗色模式
    appearance: true,

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025',
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/lyfffffff/lyfffffff.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // 搜索
    search: {
      provider: 'local',
    },
  },

  vite: {
    plugins: [UnoCSS()],
    ssr: {
      noExternal: ['vitepress-theme-open17', 'vitepress-velonor'],
    },
  },
})
