import Image from "next/image";
import FvBg from "./FvBg";
import styles from "@/styles/Mainvisual.module.scss";
import Container from "./layouts/Container";

type Props = {
  fvBgClass?: string;
};

const Mainvisual = ({ fvBgClass }: Props) => {
  return (
    <section className={`${styles.mainvisual}`}>
      <FvBg fvBgClass="" />
      <div className={`${styles.content}`}>
        <div className={`${styles.copyGroup}`}>
          <div className={`${styles.copy} ${styles.copy01}`}>
            <Image
              src="./img-mv-copy.svg"
              alt="Hoppy brews your life."
              height={120}
              width={9248}
            />
          </div>
          <div className={`${styles.copy} ${styles.copy02}`}>
            <Image
              src="./img-mv-copy.svg"
              alt="Hoppy brews your life."
              height={120}
              width={9248}
            />
          </div>
          <div className={`${styles.copy} ${styles.copy03}`}>
            <Image
              src="./img-mv-copy.svg"
              alt="Hoppy brews your life."
              height={120}
              width={9248}
            />
          </div>
        </div>
      </div>
      <Image
        className={`${styles.bubble}`}
        src="./common/img-bubble-white.svg"
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
export default Mainvisual;
