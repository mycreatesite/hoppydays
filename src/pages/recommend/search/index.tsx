import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";
import { LIST_PER_PAGE } from "@/components/util/globalSettings";

export default function Search() {

  const PAGE_TITLE = "おすすめホッピー居酒屋を検索";
  const PAGE_PATH = "recommend";

  const router = useRouter();

  let queryKeyword;
  if (typeof window !== "undefined") {
    queryKeyword = new URLSearchParams(window.location.search).get("keyword");
  }
  let queryPage;
  if (typeof window !== "undefined") {
    queryPage = new URLSearchParams(window.location.search).get("page");
  }

  const [page, setPage] = useState(queryPage || "");
  const [keyword, setKeyword] = useState(queryKeyword || "");
  const [recommends, setRecommends] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setPage(router.query.page as string)
    setKeyword(router.query.keyword as string)
  }, [router.query.keyword, router.query.page]);

  useEffect(() => {
    page !== undefined && keyword !== undefined && searchRecommends();
    // eslint-disable-next-line
  }, [page,keyword]);

  async function searchRecommends() {
    setLoading(true);
    const res = await axios.get("../api/recommends", {
      params: {
        keyword,
        page
      },
    });
    setRecommends(res.data.contents);
    setTotalCount(res.data.totalCount);
    setLoading(false);
  }

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
        isSearch={true}
        loading={loading}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
        headingJa="おすすめホッピー居酒屋"
      >
        <SearchGroup keyword={keyword}/>
      </SectionListPage>
    </>
  );
}
