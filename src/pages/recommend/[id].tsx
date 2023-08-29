import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import ArticleDetailPage from "@/components/templates/ArticleDetailPage";

type Props = {
  recommend: Recommend;
};


export default function RecommendId({recommend}:Props) {
  return (
    <>
      <NextSeo
        title={`${recommend.name}│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={recommend.area}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend/${recommend.id}`,
          title: `${recommend.name}│${process.env.NEXT_PUBLIC_SITE_NAME}`,
          description: recommend.area,
          images: [
            {
              url: recommend.image ? recommend.image.url as string : `${process.env.NEXT_PUBLIC_SITE_URL}/common/img-noimg.svg`,
              alt: recommend.name
            },
          ],
        }}
      />
      <ArticleDetailPage
        item={recommend}
        heading={{ first: "Recom", second: "mend" }}
        headingJa="おすすめホッピー居酒屋"
        articleClass = "recommend"
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "recommend" });
  const paths = data.contents.map(
    (content: { id: string }) => `/recommend/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "recommend", contentId: id });
  return {
    props: {
      recommend: data,
    },
  };
};