import type { NextApiRequest, NextApiResponse } from 'next'
import {client} from "../../../libs/client";
import { LIST_PER_PAGE } from "@/components/util/globalSettings";

export const getSearchRecommends = async (

  req: NextApiRequest,
  res: NextApiResponse

  ) => {
  // 検索したいキーワードをqueryから取得
  const keyword = req.query.keyword as string;
  const currentPage = req.query.page as string;


  // 検索キーワードを設定した状態でmicroCMSにリクエストを送信。
  const response = await client.get({
    endpoint: "recommend",
    queries: {
      q: decodeURI(keyword),
      limit: LIST_PER_PAGE,
      offset: (parseInt(currentPage) - 1) * LIST_PER_PAGE,
      orders: "-publishedAt"
    },
  });
  return res.status(200).json(response);
};

export default getSearchRecommends;