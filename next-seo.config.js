const SEO = {
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Hoppy, brews your life. ホッピー、それは人生を豊かにするエッセンス。",
  openGraph: {
    type: "website",
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description:
      "Hoppy, brews your life. ホッピー、それは人生を豊かにするエッセンス。",
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
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
    }
  ]
}
export default SEO;