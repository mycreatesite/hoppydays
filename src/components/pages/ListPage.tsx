import Link from "next/link";
import Image from "next/image";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/pages/ListPage.module.scss";
import Container from "@/components/layouts/Container";
import { sawarabiGothic } from "@/components/util/font";

type Props = {
  items: Recommend[] | Nippo[];
  path: string;
  heading: {
    first: string;
    second: string;
  };
};

export default function ListPage({ items, path, heading }: Props) {
  return (
    <>
      <section className={`${styles.listPage}`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="underListContainer">
          <h1 className={`${styles.heading}`}>
            {heading.first}
            <span>{heading.second}</span>
          </h1>
          <ul className={`${styles.list}`}>
            {items.map((item) => {

              const isNippo = "date" in item;
              
              return (
                <li className={`${styles.item}`} key={item.id}>
                  <Link href={`/${path}/${item.id}`}>
                    <div className={`${styles.image}`}>
                      <Image
                        src={item.image.url}
                        alt={item.name}
                        height={338}
                        width={507}
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      {isNippo && (
                        <time className={`${styles.date}`}>{item.date}</time>
                      )}
                      <h3 className={`${styles.title} ${sawarabiGothic.className}`}>
                        {isNippo ? item.title : item.name}
                      </h3>
                      <p className={`${styles.subtitle} ${sawarabiGothic.className}`}>
                        {isNippo ? item.name : item.area}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
