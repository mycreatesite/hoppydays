const SEO = {
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Hoppy brews your life. ホッピー、それは人生を豊かにするエッセンス。",
  openGraph: {
    type: "website",
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description:
      "Hoppy brews your life. ホッピー、それは人生を豊かにするエッセンス。",
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: "https://hoppydays.vercel.app/ogp.jpg",
        width: 1200,
        height: 630,
        alt: process.env.NEXT_PUBLIC_SITE_NAME,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://hoppydays.vercel.app/apple-touch-icon.png',
      sizes: '256x256'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#222222'
    },
    {
      name: 'google-site-verification',
      content: 'n-45gxzttq9F36Z8YxhMX4MaZiADSVn9wzTP6LE4Iws'
    },
  ],
}
export default SEO;