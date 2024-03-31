import { ArticleJsonLd } from "next-seo";

const JsonldTop = () => {
  return (
    <ArticleJsonLd
      type="Article"
      url={`${process.env.NEXT_PUBLIC_SITE_URL}`}
      title={`${process.env.NEXT_PUBLIC_SITE_NAME}`}
      images={[
        "https://hoppydays.vercel.app/ogp.jpg"
      ]}
      datePublished="2023-10-01T00:00:00+09:00"
      authorName="ma-ya's CREATE"
      description="Hoppy brews your life. ホッピー、それは人生を豊かにするエッセンス。"
    />
  );
};
export default JsonldTop;