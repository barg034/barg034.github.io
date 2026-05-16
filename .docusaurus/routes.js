import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '912'),
    exact: true
  },
  {
    path: '/blog/2026-05-15-my-first-mod',
    component: ComponentCreator('/blog/2026-05-15-my-first-mod', 'a0f'),
    exact: true
  },
  {
    path: '/blog/2026-05-16-local-multiplayer',
    component: ComponentCreator('/blog/2026-05-16-local-multiplayer', 'd95'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/barg',
    component: ComponentCreator('/blog/authors/barg', '2d6'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c36'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3d1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '16d'),
            routes: [
              {
                path: '/docs/category/jak-1-mods',
                component: ComponentCreator('/docs/category/jak-1-mods', '6dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jak-2-mods',
                component: ComponentCreator('/docs/category/jak-2-mods', 'b04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/jak-3-mods',
                component: ComponentCreator('/docs/category/jak-3-mods', 'dd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jak1/checkpoint-randomizer',
                component: ComponentCreator('/docs/jak1/checkpoint-randomizer', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jak2/daxter-2',
                component: ComponentCreator('/docs/jak2/daxter-2', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/jak3/daxter-3',
                component: ComponentCreator('/docs/jak3/daxter-3', 'fe3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
