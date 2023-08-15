import Link from "next/link";
import Image from "next/image";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/SectionListPage.module.scss";
import Container from "@/components/layouts/Container";
import { splitTextWithSpan } from "../util/splitTextWithSpan";
import { sawarabiGothic } from "@/components/util/font";
import dayjs from "dayjs";

type Props = {
  items: Recommend[] | Nippo[];
  path: string;
  heading: {
    first: string;
    second: string;
  };
};

export default function SectionListPage({ items, path, heading }: Props) {
  return (
    <>
      <section className={`${styles.listPage} js-scrollAddClass`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="largeContainer">
          <h1 className={`${styles.heading}`}>
            {splitTextWithSpan(heading.first, 200)}
            <span className={`${styles.outline}`}>
              {splitTextWithSpan(heading.second, 200)}
            </span>
          </h1>
          <ul className={`${styles.list}`}>
            {items.map((item, index) => {
              const isNippo = "date" in item;

              return (
                <li
                  className={`${styles.item}`}
                  key={item.id}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Link href={`/${path}/${item.id}`}>
                    <div className={`${styles.image}`}>
                      <Image
                        src={item.image.url}
                        alt={item.name}
                        height={338}
                        width={507}
                        loading="eager"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      {isNippo && (
                        <time dateTime={item.date} className={`${styles.date}`}>
                          {dayjs(item.date).format("YYYY.MMDD")}
                        </time>
                      )}
                      <h3
                        className={`${styles.title} ${sawarabiGothic.className}`}
                      >
                        {isNippo ? item.title : item.name}
                      </h3>
                      <p
                        className={`${styles.subtitle} ${sawarabiGothic.className}`}
                      >
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
