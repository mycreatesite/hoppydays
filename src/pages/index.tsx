import Link from "next/link";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { client } from "@/libs/client";
import { Recommend } from "@/types/recommend";
import { Nippo } from "@/types/nippo";
import Mainvisual from "@/components/Mainvisual";

const inter = Inter({ subsets: ['latin'] })

type Props = {
  recommends: Recommend[];
  nippos: Nippo[];
};

export default function Home({recommends, nippos}:Props) {
  return (
    <>
      <main>
        <Mainvisual/>
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
        <div><Link href={`/recommend`}>一覧ページへ</Link></div>

        <div>
          <ul>
            {nippos.map((nippo) => (
              <li key={nippo.id}>
                <Link href={`/nippo/${nippo.id}`}>
                  <div>
                    <Image
                      src={nippo.image.url}
                      alt={nippo.title}
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
        <div><Link href={`/nippo`}>一覧ページへ</Link></div>

      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const recommendData = await client.get({
    endpoint: "recommend",
    queries: { limit: 2, orders: '-publishedAt' }
  });
  const nippoData = await client.get({
    endpoint: "nippo",
    queries: { limit: 2, orders: '-publishedAt' }
  });
  return {
    props: {
      recommends: recommendData.contents,
      nippos: nippoData.contents
    },
  };
};
