import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";
import "dotenv/config";

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://doc.olgagroup.uk/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Olga", // Usually your GitHub org/user name.
  projectName: "OlgaDoc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  //  noIndex: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //          editUrl:
          //            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        //        blog: {
        //          showReadingTime: true,
        //          // Please change this to your repo.
        //          // Remove this to remove the "edit this page" links.
        //          editUrl:
        //            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //        },
        blog: {},
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [tailwindPlugin],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      contextualSearch: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "OlgaDoc",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        //        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Olga202424",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            //            {
            //              label: "Tutorial",
            //              to: "/docs/intro",
            //            },
          ],
        },
        {
          title: "Community",
          items: [
            //            {
            //              label: "Stack Overflow",
            //              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //            },
            //            {
            //              label: "Discord",
            //              href: "https://discordapp.com/invite/docusaurus",
            //            },
            //            {
            //              label: "Twitter",
            //              href: "https://twitter.com/docusaurus",
            //            },
          ],
        },
        {
          title: "More",
          items: [
            //            {
            //              label: "Blog",
            //              to: "/blog",
            //            },
            //            {
            //              label: "GitHub",
            //              href: "https://github.com/facebook/docusaurus",
            //            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OlgaDoc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
