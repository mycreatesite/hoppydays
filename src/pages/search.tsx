import { useState } from "react";
import axios from "axios";
import SectionListPage from "@/components/templates/SectionListPage";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [recommends, setRecommends] = useState([]);

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
