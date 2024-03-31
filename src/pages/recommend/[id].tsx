import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import ArticleDetailPage from "@/components/templates/ArticleDetailPage";
import JsonldDetail from "@/jsonld/JsonldDetail";

type Props = {
  recommend: Recommend;
};


export default function RecommendId({recommend}:Props) {
  return (
    <>
      <NextSeo
        title={`${recommend.name} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={recommend.area}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend/${recommend.id}`,
          title: `${recommend.name} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
          description: recommend.area,
          images: [
            {
              url: recommend.image
                ? `${recommend.image.url}?w=1200&h=630&fit=crop&q=70` as string
                : `${process.env.NEXT_PUBLIC_SITE_URL}/common/img-noimg.svg`,
              alt: recommend.name
            },
          ],
        }}
      />
      <JsonldDetail 
        item={recommend}
      />
      <ArticleDetailPage
        item={recommend}
        heading={{ first: "Recom", second: "mend" }}
        headingJa="おすすめホッピー居酒屋"
        articleType = "recommend"
      />
    </>
  );
};

// 動的ページURLを生成
export const getStaticPaths = async () => {
  const data = await client.getAllContentIds({ endpoint: "recommend" });
  const paths = data.map(
    (id) => `/recommend/${id}`
  );
  return { paths, fallback: false };
};

// 詳細ページコンテンツ取得
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "recommend", contentId: id });
  return {
    props: {
      recommend: data,
    },
  };
};