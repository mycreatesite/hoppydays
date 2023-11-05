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
        noindex={true}
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

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "recommend" });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / LIST_PER_PAGE)).map((repo) => `/recommend/page/${repo}`);
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "recommend", queries: { offset: (id - 1) * LIST_PER_PAGE, limit: LIST_PER_PAGE } });
  return {
    props: {
      recommends: data.contents,
      totalCount: data.totalCount
    },
  };
};
