import Link from "next/link";
import Image from "next/image";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/ArticleDetailPage.module.scss";
import ButtonEl from "@/components/elements/ButtonEl";
import Container from "@/components/layouts/Container";
import { sawarabiGothic } from "@/components/util/font";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  item: Recommend | Nippo;
  heading: {
    first: string;
    second: string;
  };
  articleClass: string;
};

export default function ArticleDetailPage({
  item,
  heading,
  articleClass,
}: Props) {
  const isNippo = "date" in item;

  return (
    <>
      <article className={`${styles.detailPage} ${articleClass}`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="smallContainer">
          <p className={`${styles.heading}`}>
            {heading.first}
            <span className={`${styles.outline}`}>{heading.second}</span>
          </p>
          <div className={`${styles.content}`}>
            <div className={`${styles.group}`}>
              {isNippo && (
                <time dateTime={item.date} className={`${styles.date}`}>
                  {dayjs(item.date).tz('Asia/Tokyo').format("YYYY.MMDD")}
                </time>
              )}
              <h1 className={`${styles.title} ${sawarabiGothic.className}`}>
                {isNippo ? item.title : item.name}
              </h1>
              <p className={`${styles.subtitle} ${sawarabiGothic.className}`}>
                {isNippo ? item.name : item.area}
              </p>
              {!isNippo && (
                <div className={`${styles.info}`}>
                  <ButtonEl
                    btnSetting={{
                      url: item.link,
                      size: "size-small",
                      targetBlank: true
                    }}
                  >店舗情報</ButtonEl>
                </div>
              )}
            </div>
            <div className={`${styles.image}`}>
              <Image
                src={item.image.url}
                alt={item.name}
                height={528}
                width={800}
              />
            </div>
            <p className={`${styles.body}`}>{item.body}</p>
          </div>
          <div className={`${styles.link}`}>
            <ButtonEl
              btnSetting={{
                url: `./`,
                icon: "arrow-left",
                iconPosition: "left",
              }}
            >
              一覧ページへ
            </ButtonEl>
          </div>
        </Container>
      </article>
    </>
  );
}
