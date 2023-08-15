import { client } from "@/libs/client";
import { Nippo } from "@/types/nippo";
import { NextSeo } from "next-seo";
import SectionListPage from "@/components/templates/SectionListPage";

type Props = {
  nippos: Nippo[];
};

export default function NippoList({ nippos }: Props) {
  return (
    <>
      <NextSeo
        title={`日報│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/nippo`,
          title: `日報│${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <SectionListPage
        items={nippos}
        path="nippo"
        heading={{ first: "Nip", second: "po" }}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nippo" });
  return {
    props: {
      nippos: data.contents,
    },
  };
};