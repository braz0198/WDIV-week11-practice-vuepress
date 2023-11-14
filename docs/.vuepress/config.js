import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Guide',
            link: '/guide',
          },
        ],
        logo: '/images/iconmonstr-carousel-filled.svg',
    }),
}