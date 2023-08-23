import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SectionListPage from "@/components/templates/SectionListPage";
import SearchGroup from "@/components/modules/SearchGroup";

export default function Search() {

  const router = useRouter();

  let query;
  if (typeof window !== "undefined") {
    query = new URLSearchParams(window.location.search).get("keyword");
  }
  const [keyword, setKeyword] = useState(query || "");
  const [recommends, setRecommends] = useState([]);
  
  useEffect(() => {
    setKeyword(router.query.keyword as string)
  }, [router.query.keyword]);

  useEffect(() => {
    keyword !== undefined && searchRecommends();
    // eslint-disable-next-line
  }, [keyword]);

  async function searchRecommends() {
    const res = await axios.get("../api/recommends", {
      params: {
        keyword,
      },
    });
    setRecommends(res.data.contents);
  }

  return (
    <>
      <SectionListPage
        items={recommends}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
      >
        <SearchGroup keyword={keyword}/>
      </SectionListPage>
    </>
  );
}
