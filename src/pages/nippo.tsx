import Link from "next/link";
import Image from 'next/image'
import { client } from "@/libs/client";
import { Nippo } from "@/types/nippo";
import { NextSeo } from "next-seo";

type Props = {
  nippos: Nippo[];
};

export default function NippoList({nippos}:Props) {
  return (
    <>
      <NextSeo
        title={`日報│${process.env.NEXT_PUBLIC_SITE_NAME}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/nippo`,
          title: `日報│${process.env.NEXT_PUBLIC_SITE_NAME}`,
        }}
      />
      <div>
        <ul>
          {nippos.map((nippo) => (
            <li key={nippo.id}>
              <Link href={`/nippo/${nippo.id}`}>
                <div>
                  <Image
                    src={nippo.image.url}
                    alt={nippo.name}
                    height={338}
                    width={507}
                  />
                </div>
                <p>{nippo.date}</p>
                <h2>{nippo.title}</h2>
                <p>{nippo.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nippo" });
  return {
    props: {
      nippos: data.contents,
    },
  };
};