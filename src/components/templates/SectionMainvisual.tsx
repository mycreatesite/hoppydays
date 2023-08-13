import Image from "next/image";
import FvBg from "../modules/FvBg";
import styles from "@/styles/components/templates/SectionMainvisual.module.scss";
import Container from "../layouts/Container";
import { useEffect } from 'react';

type Props = {
  fvBgClass?: string;
};

const SectionMainvisual = ({ fvBgClass }: Props) => {
  return (
    <section className={`${styles.mainvisual}`}>
      <FvBg fvBgClass="" />
      <div className={`${styles.content}`}>
        <div className={`${styles.copyGroup}`}>
          <div className={`${styles.copy} ${styles.copy01}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
            </div>
          </div>
          <div className={`${styles.copy} ${styles.copy02}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
            </div>
          </div>
          <div className={`${styles.copy} ${styles.copy03}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
              <Image
                src="/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5571}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className={`${styles.bubble}`}
        src="/common/img-bubble-white.svg"
        alt=""
        height={215}
        width={174}
      />
      <div className={`${styles.bottomCopy}`}>
        <Container containerClass="commonContainer">
          <div className={styles.bottomCopyGroup}>
            <p className={`${styles.more}`}><span>DRINK</span> MORE</p>
            <p className={`${styles.subcopy}`}>ホッピー、それは<span>人生を豊かにする</span>エッセンス。</p>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default SectionMainvisual;
