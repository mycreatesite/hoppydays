import Link from "next/link";
import Image from "next/image";
import { ReactNode } from 'react';
import { useRouter } from "next/router";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/SectionListPage.module.scss";
import Container from "@/components/layouts/Container";
import { splitTextWithSpan } from "../util/splitTextWithSpan";
import { sawarabiGothic } from "@/components/util/font";
import Loading from "../modules/Loading";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  items: Recommend[] | Nippo[];
  loading: boolean;
  path: string;
  heading: {
    first: string;
    second: string;
  };
  children?: ReactNode;
};

export default function SectionListPage({ items, loading, path, heading, children }: Props) {

  const router = useRouter();
  const pagePath = router.pathname;

  return (
    <>
      <section className={`${styles.listPage} js-scrollAddClass`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="largeContainer">
          <div className={`${styles.headerContent}`}>
            <h1 className={`${styles.heading}`}>
              {splitTextWithSpan(heading.first, 200)}
              <span className={`${styles.outline}`}>
                {splitTextWithSpan(heading.second, 200)}
              </span>
            </h1>
            <p className={`${styles.headingJa}`}>
              {pagePath === "/nippo" ? "ホッピー日報" : "おすすめホッピー居酒屋" }
            </p>
          </div>
          { children }
          { loading && <Loading/> }
          { !loading &&
            <>
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
                            priority={true}
                          />
                        </div>
                        <div className={`${styles.content}`}>
                          {isNippo && (
                            <time dateTime={item.date} className={`${styles.date}`}>
                              {dayjs(item.date).tz('Asia/Tokyo').format("YYYY.MMDD")}
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
              {!items.length && <p className={`${styles.noResult}`}>該当の居酒屋がないです。<br/>勉強不足ですんません。</p>}
            </>
          }
        </Container>
      </section>
    </>
  );
}
