const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const siteMetadata = {
  title: 'Blog | Sai Abhiteja Chepuri',
  author: 'Sai Abhiteja Chepuri',
  headerTitle: "Abhiteja's Blog",
  description: 'My personal blog where I share insights on software engineering, distributed systems, and technology',
  snippets: 'Reusable code snippets and technical solutions',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://saiabhiteja.github.io/abhi-portfolio',
  siteRepo: 'https://github.com/saiabhiteja/abhi-portfolio',
  siteLogo: `${basePath}/static/images/logo.png`,
  image: `${basePath}/static/images/Abhi.jpeg`,
  socialBanner: `${basePath}/static/images/twitter-card.png`,
  email: 'saiabhitejachepuri@gmail.com',
  github: 'https://github.com/saiabhiteja',
  twitter: 'https://twitter.com/saiabhiteja',
  linkedin: 'https://www.linkedin.com/in/saiabhitejachepuri/',
  website: 'https://saiabhiteja.github.io',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: null, // Disabled comments to prevent Giscus errors
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'saiabhiteja',
  },
}

module.exports = siteMetadata
