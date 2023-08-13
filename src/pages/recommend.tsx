import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import ListPage from "@/components/pages/ListPage";

type Props = {
  recommends: Recommend[];
};

export default function RecommendList({ recommends }: Props) {
  return (
    <>
      <NextSeo
        title={`おすすめホッピー居酒屋│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend`,
          title: `おすすめホッピー居酒屋│${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <ListPage
        items={recommends}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "recommend" });
  return {
    props: {
      recommends: data.contents,
    },
  };
};
