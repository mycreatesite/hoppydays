import { client } from "@/libs/client";
import { Nippo } from "@/types/nippo";
import { NextSeo } from "next-seo";
import ArticleDetailPage from "@/components/templates/ArticleDetailPage";

type Props = {
  nippo: Nippo;
};

export default function NippoId({nippo}:Props) {
  return (
    <>
      <NextSeo
        title={`${nippo.title} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={nippo.name}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/nippo/${nippo.id}`,
          title: `${nippo.title} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
          description: nippo.name,
          images: [
            {
              url: nippo.image.url,
              alt: nippo.title
            },
          ],
        }}
      />
      <ArticleDetailPage
        item={nippo}
        heading={{ first: "Nip", second: "po" }}
        headingJa="ホッピー日報"
        articleType = "nippo"
      />
    </>
  );
};

// 動的ページURLを生成
export const getStaticPaths = async () => {
  const data = await client.getAllContentIds({ endpoint: "nippo" });
  const paths = data.map(
    (id) => `/nippo/${id}`
  );
  return { paths, fallback: false };
};

// 詳細ページコンテンツ取得
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "nippo", contentId: id });
  return {
    props: {
      nippo: data,
    },
  };
};