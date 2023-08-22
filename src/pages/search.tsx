import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SectionListPage from "@/components/templates/SectionListPage";

export default function Search() {

  const [keyword, setKeyword] = useState("");
  const [recommends, setRecommends] = useState([]);
  const router = useRouter();
  const searchRecommends = async () => {
    // 検索APIにリクエストを送信
    const res = await axios.get("./api/recommends", {
      params: {
        keyword,
      },
    });
    // 検索結果をセット
    setRecommends(res.data.contents);
  };

  useEffect(() => {

    setKeyword(router.query.keyword as string)
    searchRecommends();
  }, [router.pathname,router.query]);

  return (
    <>
      <SectionListPage
        items={recommends}
        path="recommend"
        heading={{ first: "Recom", second: "mend" }}
      >
        <div>
          <input
            value={keyword}
            placeholder="キーワードを入力"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={searchRecommends}>
            検索実行
          </button>
        </div>
      </SectionListPage>
    </>
  );
}
