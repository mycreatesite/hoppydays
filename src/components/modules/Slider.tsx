import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Nippo } from "@/types/nippo";
import { Recommend } from "@/types/recommend";
import styles from "@/styles/components/modules/Slide.module.scss";
import { sawarabiGothic } from "../util/font";

type Props = {
  items: Recommend[] | Nippo[];
  path: string;
};

const Slider = ({ items, path }: Props) => {
  return (
    <Swiper
      className={`${styles.swiper}`}
      slidesPerView="auto"
      spaceBetween={24}
      grabCursor={true}
      breakpoints={{
        768: {
          spaceBetween: 32,
        },
        1600: {
          spaceBetween: 64,
        },
      }}
    >
      {items.map((item) => {
        const isNippo = "date" in item;
        return (
          <SwiperSlide
            key={item.id}
            className={styles.slide}
          >
            <Link href={`/${path}/${item.id}`} className={`${styles.item}`}>
              <div className={`${styles.image}`}>
                <Image
                  src={item.image.url}
                  alt={item.name}
                  height={512}
                  width={768}
                />
              </div>
              <div className={`${styles.content}`}>
                {isNippo && <time className={`${styles.date}`}>{item.date}</time>}
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
