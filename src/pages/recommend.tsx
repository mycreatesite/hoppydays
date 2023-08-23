import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";

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
      <SectionListPage
        items={recommends}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
      >
        <SearchGroup keyword=""/>
      </SectionListPage>
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
