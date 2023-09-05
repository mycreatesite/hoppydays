import Image from "next/image";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import { useState, useEffect } from "react";
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/ArticleDetailPage.module.scss";
import Button from "@/components/elements/Button";
import Container from "@/components/layouts/Container";
import ShareSns from "../modules/ShareSns";
import ClipPath from "../modules/ClipPath";
import HeadingContent from "@/components/modules/HeadingContent";
import { sawarabiGothic } from "@/components/util/font";
import LottieHeart from "../elements/LottieHeart";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  item: Recommend | Nippo;
  heading: {
    first: string;
    second: string;
  };
  headingJa: string;
  articleType: string;
};

export default function ArticleDetailPage({
  item,
  heading,
  headingJa,
  articleType,
}: Props) {
  const isNippo = "date" in item;

  const [likeCount, setLikeCount] = useState(item.like ? item.like : 0);
  const [likedFlag, setLikedFlag] = useState(false);
  const endpoint = `https://hoppydays.microcms.io/api/v1/${articleType}/${item.id}?fields=like`;
  const headers = {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
  };

  const handleLike = async () => {
    if (likedFlag) return;
    patchAndFetchLikeCount();
    setLikedFlag(true);
  };
  useEffect(() => {
    fetchAndSetLikeCount();
    // eslint-disable-next-line
  }, []);

  async function patchAndFetchLikeCount() {
    await fetch(endpoint, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ like: (likeCount as number) + 1 }),
    }).then(() => fetchAndSetLikeCount());
  }
  async function fetchAndSetLikeCount() {
    await fetch(endpoint, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((json) => setLikeCount(json.like ? json.like : 0));
  }

  return (
    <>
      <article
        className={`${styles.detailPage} ${styles[articleType]} js-scrollAddClass`}
      >
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
                  {dayjs(item.date).tz("Asia/Tokyo").format("YYYY.MMDD")}
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
                      targetBlank: true,
                    }}
                  >
                    店舗情報
                  </Button>
                </div>
              )}
            </div>
            <div className={`${styles.image}`}>
              <ClipPath />
              <Image
                src={
                  item.image
                    ? `${item.image.url}?w=1200&q=70&fm=webp`
                    : "/common/img-noimg.svg"
                }
                alt={item.name}
                height={528}
                width={800}
                loading="eager"
                priority={true}
              />
            </div>
            <p
              className={`${styles.body} ${sawarabiGothic.className}`}
              dangerouslySetInnerHTML={{
                __html: item.body.replace(/\r?\n/g, "<br>"),
              }}
            />
          </div>
          <div className={`${styles.contentFooter}`}>
            <div className={`${styles.likeGroup}`}>
              <button onClick={handleLike}>
                <LottieHeart />
              </button>
              <span className={`${styles.num} ${sawarabiGothic.className}`}>
                {likeCount}
              </span>
            </div>
            <div className={`${styles.shareSnsGroup}`}>
              <ShareSns color="black" />
            </div>
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
