import Link from "next/link";
import Image from "next/image";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/ArticleDetailPage.module.scss";
import Button from "@/components/elements/Button";
import Container from "@/components/layouts/Container";
import HeadingContent from "@/components/modules/HeadingContent"
import { sawarabiGothic } from "@/components/util/font";
import { splitTextWithSpan } from "../util/splitTextWithSpan";
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
  headingJa: string;
  articleClass: string;
};

export default function ArticleDetailPage({
  item,
  heading,
  headingJa,
  articleClass,
}: Props) {
  const isNippo = "date" in item;
  return (
    <>
      <article className={`${styles.detailPage} ${articleClass} js-scrollAddClass`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="smallContainer">
          <HeadingContent
            hasH1={false}
            heading={{ first: heading.first, second: heading.second }}
            headingJa={headingJa}
          />
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
                  <Button
                    btnSetting={{
                      url: item.link,
                      size: "size-small",
                      targetBlank: true
                    }}
                  >店舗情報</Button>
                </div>
              )}
            </div>
            <div className={`${styles.image}`}>
              <Image
                src={item.image ? `${item.image.url}?w=1200&q=70&fm=webp` : "/common/img-noimg.svg"}
                alt={item.name}
                height={528}
                width={800}
                loading = 'eager'
                priority={true}
              />
            </div>
            <p className={`${styles.body} ${sawarabiGothic.className}`} dangerouslySetInnerHTML={{ __html: item.body.replace(/\r?\n/g, '<br>') }} />
          </div>
          <div className={`${styles.link}`}>
            <Button
              btnSetting={{
                url: `./`,
                icon: "arrow-left",
                iconPosition: "left",
              }}
            >
              一覧ページへ
            </Button>
          </div>
        </Container>
      </article>
    </>
  );
}
