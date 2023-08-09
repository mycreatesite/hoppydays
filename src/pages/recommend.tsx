import Link from "next/link";
import Image from "next/image";
import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { NextSeo } from "next-seo";

type Props = {
  recommends: Recommend[];
};


export default function RecommendList({recommends}:Props) {
  return (
    <>
      <NextSeo
        title={`おすすめホッピー居酒屋│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/recommend`,
          title: `おすすめホッピー居酒屋│${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <div>
        <ul>
          {recommends.map((recommend) => (
            <li key={recommend.id}>
              <Link href={`/recommend/${recommend.id}`}>
                <div>
                  <Image
                    src={recommend.image.url}
                    alt={recommend.name}
                    height={338}
                    width={507}
                  />
                </div>
                <h2>{recommend.name}</h2>
                <p>{recommend.area}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "recommend" });
  return {
    props: {
      recommends: data.contents,
    },
  };
};
