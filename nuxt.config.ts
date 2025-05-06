// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  buildDir: 'dist',
  app: {
    baseURL: '/',
    head:({
      title: 'Bishal - Web Developer',
      meta: [
          { name: 'description', content: 'Portfolio of Bishal, a skilled and passionate web developer based in [Your Location].' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },

          // Open Graph (Facebook, LinkedIn)
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Bishal - Web Developer' },
          { property: 'og:description', content: 'Showcasing projects, skills, and experience of Bishal, a frontend web developer.' },
          { property: 'og:image', content: 'https://biishal.vercel.app/preview.jpg'},
          { property: 'og:url', content: 'https://biishal.vercel.app' },

          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Bishal - Web Developer' },
          { name: 'twitter:description', content: 'Frontend portfolio of Bishal with responsive projects and clean code.' },
          { name: 'twitter:image', content: 'https://biishal.vercel.app/preview.jpg' }
      ],
      link: [
          { rel: 'canonical', href: 'https://biishal.vercel.app' }
      ]
    })
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/base.css',
    '~/assets/styles/theme.css',
    '~/assets/styles/responsive.css',
    'animate.css',
    'tailwindcss',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  runtimeConfig: {
    public: {
      emailJsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailJsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailJsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
  },
  plugins: ['~/plugins/router.ts'],
})
