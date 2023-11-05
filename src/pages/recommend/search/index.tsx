import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";
import { LIST_PER_PAGE } from "@/components/util/globalSettings";

export default function Search() {

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
