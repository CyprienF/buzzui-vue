import { defineConfig } from 'vitepress';

import { title, description, github, twitter } from './meta';

export default defineConfig({
  lang: 'en-US',
  title: title,
  description: description,

  lastUpdated: true,

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'github', link: github },
    ],

    footer: {
      copyright: 'Copyright © 2022 Cyprien FLOQUET',
    },
  },
});

function nav() {
  return [{ text: 'Guide', link: '/guide/introduction' }];
}

function sidebar() {
  return [
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Introduction', link: 'guide/introduction' },
        { text: 'Getting Started', link: 'guide/getting-started' },
        { text: 'Types', link: 'guide/types' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: [
        { text: 'BuzzAvatar', link: 'components/buzz-avatar' },
        { text: 'BuzzButton', link: 'components/buzz-button' },
        { text: 'BuzzIcon', link: 'components/buzz-icon' },
      ],
    },
  ];
}
