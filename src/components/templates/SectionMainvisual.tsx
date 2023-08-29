import Image from "next/image";
import FvBg from "../modules/FvBg";
import styles from "@/styles/components/templates/SectionMainvisual.module.scss";
import Container from "../layouts/Container";

type Props = {
  fvBgClass?: string;
};

const SectionMainvisual = ({ fvBgClass }: Props) => {
  return (
    <section className={`${styles.mainvisual} js-scrollAddClass`}>
      <FvBg fvBgClass="" />
      <div className={`${styles.content}`}>
        <div className={`${styles.copyGroup} js-scrollParallax-mainLogo`}>
          <div className={`${styles.copy} ${styles.copy01}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
          <div className={`${styles.copy} ${styles.copy02}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
          <div className={`${styles.copy} ${styles.copy03}`}>
            <div className={`${styles.inner}`}>
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
              <Image
                src="/common/img-mv-copy.svg"
                alt="Hoppy brews your life."
                height={120}
                width={5480}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bubbleOuter} js-scrollParallax-bubble`}>
        <Image
          className={`${styles.bubble}`}
          src="/common/img-bubble-white.svg"
          alt=""
          height={215}
          width={174}
          loading="eager"
          priority={true}
        />
      </div>
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
