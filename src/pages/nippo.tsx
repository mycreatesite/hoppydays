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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nippo", queries: { offset: 0, limit: LIST_PER_PAGE }});
  return {
    props: {
      nippos: data.contents,
      totalCount: data.totalCount
    },
  };
};
