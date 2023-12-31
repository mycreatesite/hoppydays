import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";
import { LIST_PER_PAGE } from "@/components/util/globalSettings";

type Props = {
  recommends: Recommend[];
  totalCount: number;
};

export default function RecommendList({ recommends, totalCount }: Props) {

  const PAGE_TITLE = "おすすめホッピー居酒屋";
  const PAGE_PATH = "recommend";

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
        totalCount={totalCount}
        perPage={LIST_PER_PAGE}
        path={PAGE_PATH}
        heading={{ first: "Recom", second: "mend" }}
        headingJa={PAGE_TITLE}
      >
        <SearchGroup keyword=""/>
      </SectionListPage>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "recommend", queries: { offset: 0, limit: LIST_PER_PAGE } });
  return {
    props: {
      recommends: data.contents,
      totalCount: data.totalCount
    },
  };
};
