import Link from "next/link";
import Image from "next/image";
import { ReactNode } from 'react';
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/SectionListPage.module.scss";
import Container from "@/components/layouts/Container";
import HeadingContent from "@/components/modules/HeadingContent"
import { sawarabiGothic } from "@/components/util/font";
import Loading from "../modules/Loading";
import { GoHeart } from "react-icons/go";
import ClipPath from "../modules/ClipPath";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  items: Recommend[] | Nippo[];
  loading?: boolean;
  path: string;
  heading: {
    first: string;
    second: string;
  };
  headingJa: string;
  children?: ReactNode;
};

export default function SectionListPage({ items, loading, path, heading, headingJa, children }: Props) {
  return (
    <>
      <section className={`${styles.listPage} js-scrollAddClass`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="largeContainer">
          <HeadingContent
            heading={{ first: heading.first, second: heading.second }}
            headingJa={headingJa}
          />
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
                          <ClipPath/>
                          <Image
                            src={item.image ? `${item.image.url}?w=800&q=70&fm=webp` : "/common/img-noimg.svg"}
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
                          <h2
                            className={`${styles.title} ${sawarabiGothic.className}`}
                          >
                            {isNippo ? item.title : item.name}
                          </h2>
                          <p
                            className={`${styles.subtitle} ${sawarabiGothic.className}`}
                          >
                            {isNippo ? item.name : item.area}
                          </p>
                          <div className={`${styles.likeGroup}`}>
                            <GoHeart/>
                            <span className={`${styles.num} ${sawarabiGothic.className}`}>{item.like ? item.like : 0}</span>
                          </div>
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
