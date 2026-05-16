// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'barg034',
  tagline: 'Personal site where I can nerd out, mostly about OpenGOAL.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://barg034.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'barg034', // Usually your GitHub org/user name.
  projectName: 'barg034.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://opengoal.dev',
            label: 'OpenGOAL',
            position: 'right',
          },
          {
            href: 'https://jakmods.dev',
            label: 'JakMods',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'YouTube (personal)',
                href: 'https://www.youtube.com/@barg034',
              },
              {
                label: 'YouTube (JakMods)',
                href: 'https://www.youtube.com/@JakMods',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/barg034.bsky.social',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/dallmeyer',
              },
            ],
          },
          {
            title: 'Discord',
            items: [
              {
                label: 'OpenGOAL',
                href: 'https://discord.gg/VZbXMHXzWv',
              },
              {
                label: 'JakMods',
                href: 'https://discord.com/invite/k5PKHta6d8',
              },
              {
                label: 'Jak Speedruns',
                href: 'https://discord.gg/UPaQy8ZUAa',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'OpenGOAL',
                href: 'https://github.com/open-goal',
              },
              {
                label: 'Personal',
                href: 'https://github.com/dallmeyer',
              },
              {
                label: 'JakMods',
                href: 'https://github.com/orgs/OpenGOAL-Mods',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
