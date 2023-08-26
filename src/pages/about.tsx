import { NextSeo } from "next-seo";
import ArticleGeneralPage from "@/components/templates/ArticleGeneralPage"

export default function About() {

  const PAGE_TITLE = "HOPPY DAYSについて";

  return (
    <>
      <NextSeo
        title={`${PAGE_TITLE}│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
          title: `${PAGE_TITLE}│${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <ArticleGeneralPage
        heading={{ first: "Abo", second: "ut" }}
        headingJa={PAGE_TITLE}
      >
        <p>hogehogehoge</p>
      </ArticleGeneralPage>
    </>
  );
}
