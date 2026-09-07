import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  title: 'Demo-Vuepress',
  description: 'A Vuepress Demonstration Website',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: false,
          children: [
            '/guide/README.md',
            '/guide/using-vue.md',
          ],
        },
      ],
    },
  }),
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
});
