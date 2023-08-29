import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import styles from "@/styles/components/modules/Slider.module.scss";
import { sawarabiGothic } from "../util/font";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  items: Recommend[] | Nippo[];
  path: string;
};

const Slider = ({ items, path }: Props) => {
  return (
    <Swiper
      className={`${styles.swiper}`}
      modules={[Mousewheel]}
      slidesPerView="auto"
      grabCursor={true}
      mousewheel={{
        thresholdDelta: 70,
        forceToAxis: true,
      }}
      spaceBetween={24}
      breakpoints={{
        768: {
          spaceBetween: 32,
          centeredSlides: true,
        },
        1600: {
          spaceBetween: 64,
          centeredSlides: true,
        },
      }}
    >
      {items.map((item, index) => {
        const isNippo = "date" in item;
        return (
          <SwiperSlide
            key={item.id}
            className={styles.slide}
            style={{
              transitionDelay: `${index * 300}ms`
            }}
          >
            <Link href={`/${path}/${item.id}`} className={`${styles.item}`}>
              <div className={`${styles.image}`}>
                <Image
                  src={item.image ? `${item.image.url}?w=1200&q=70&fm=webp` : "/common/img-noimg.svg"}
                  alt={item.name}
                  height={512}
                  width={768}
                />
              </div>
              <div className={`${styles.content}`}>
                {isNippo && <time dateTime={item.date} className={`${styles.date}`}>{dayjs(item.date).tz('Asia/Tokyo').format('YYYY.MMDD')}</time>}
                {isNippo ? (
                  <h3 className={`${styles.title} ${sawarabiGothic.className}`}>{item.title}</h3>
                ) : (
                  <h3 className={`${styles.title} ${sawarabiGothic.className}`}>{item.name}</h3>
                )}
                {isNippo ? (
                  <p className={`${styles.subtitle} ${sawarabiGothic.className}`}>{item.name}</p>
                ) : (
                  <p className={`${styles.subtitle} ${sawarabiGothic.className}`}>{item.area}</p>
                )}
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
