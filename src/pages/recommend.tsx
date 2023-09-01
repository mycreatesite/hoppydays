import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";

type Props = {
  recommends: Recommend[];
};

export default function RecommendList({ recommends }: Props) {

  const PAGE_TITLE = "おすすめホッピー居酒屋";

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend`,
          title: `${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <SectionListPage
        items={recommends}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
        headingJa={PAGE_TITLE}
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
