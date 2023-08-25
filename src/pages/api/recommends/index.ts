import type { NextApiRequest, NextApiResponse } from 'next'
import {client} from "../../../libs/client";

type Data = {
  name: string
}

export const getSearchRecommends = async (

  req: NextApiRequest,
  res: NextApiResponse<Data>

  ) => {
  // 検索したいキーワードをqueryから取得
  const keyword = req.query.keyword as string;

  // 検索キーワードを設定した状態でmicroCMSにリクエストを送信。
  const response = await client.get({
    endpoint: "recommend",
    queries: {
      q: decodeURI(keyword),
    },
  });
  return res.status(200).json(response);
};

export default getSearchRecommends;