import Link from "next/link";
import Image from "next/image"
import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";
import FvBg from "@/components/modules/FvBg";

type Props = {
  recommend: Recommend;
};


export default function RecommendId({recommend}:Props) {
  return (
    <>
      <NextSeo
        title={`${recommend.name}│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        description={recommend.area}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend/${recommend.id}`,
          title: `${recommend.name}│${process.env.NEXT_PUBLIC_SITE_NAME}`,
          description: recommend.area,
          images: [
            {
              url: recommend.image.url,
              alt: recommend.name
            },
          ],
        }}
      />
      <main>
      <FvBg fvBgClass="underPage"/>
        <div>
          <h1>{recommend.name}</h1>
          <p>{recommend.area}</p>
          <p><a href={recommend.link}>店舗情報</a></p>
          <div>
            <Image
              src={recommend.image.url}
              alt={recommend.name}
              height={528}
              width={800}
            />
          </div>
          <p>{recommend.body}</p>
        </div>
        <div>
          <Link href="/recommend">一覧ページへ</Link>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "recommend" });
  const paths = data.contents.map(
    (content: { id: string }) => `/recommend/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "recommend", contentId: id });
  return {
    props: {
      recommend: data,
    },
  };
};