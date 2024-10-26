import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json';
 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AO SDK",
  description: "SDK for developing services on the ao network",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: [
       {
        text: 'API',
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/project-kardeshev/ao-sdk' },
    ],
    search: {
      provider: 'local'
    }
  },
})
