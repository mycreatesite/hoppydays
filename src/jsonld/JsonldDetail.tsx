import { ArticleJsonLd } from "next-seo";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";

type Props = {
  item: Recommend | Nippo;
};

const JsonldDetail = ({
  item
}: Props) => {
  const isNippo = "date" in item;
  return (
    <ArticleJsonLd
      type="Article"
      url={isNippo
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/nippo/${item.id}`
        : `${process.env.NEXT_PUBLIC_SITE_URL}/recommend/${item.id}`
      }
      title={isNippo ? item.title : item.name}
      images={[
        item.image
        ? `${item.image.url}?w=1200&q=70&fm=webp`
        : `${process.env.NEXT_PUBLIC_SITE_URL}/common/img-noimg.svg`
      ]}
      datePublished={item.publishedAt}
      dateModified={item.updatedAt}
      authorName="ma-ya's CREATE"
      description={`${item.body.slice(0, 30)}...`}
    />
  );
};
export default JsonldDetail;