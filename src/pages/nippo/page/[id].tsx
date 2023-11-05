import { client } from "@/libs/client";
import { Nippo } from "@/types/nippo";
import { NextSeo } from "next-seo";
import SectionListPage from "@/components/templates/SectionListPage";
import { LIST_PER_PAGE } from "@/components/util/globalSettings";

type Props = {
  nippos: Nippo[];
  totalCount: number;
};

export default function NippoList({ nippos, totalCount }: Props) {

  const PAGE_TITLE = "ホッピー日報";
  const PAGE_PATH = "nippo";

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        noindex={true}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/nippo`,
          title: `${PAGE_TITLE} │ ${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <SectionListPage
        items={nippos}
        totalCount={totalCount}
        perPage={LIST_PER_PAGE}
        path={PAGE_PATH}
        heading={{ first: "Nip", second: "po" }}
        headingJa={PAGE_TITLE}
      />
    </>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "nippo" });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / LIST_PER_PAGE)).map((repo) => `/nippo/page/${repo}`);
  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "nippo", queries: { offset: (id - 1) * LIST_PER_PAGE, limit: LIST_PER_PAGE } });
  return {
    props: {
      nippos: data.contents,
      totalCount: data.totalCount
    },
  };
};
