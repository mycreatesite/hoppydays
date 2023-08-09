import styles from "@/styles/FvBg.module.scss";
import Image from "next/image";

type Props = {
  fvBgClass?: string;
};

const FvBg = ({ fvBgClass }: Props) => {
  return (
    <div className={`${styles.fvBg} ${fvBgClass}`}>
      <div className={`${styles.inner}`}>
        <Image
          className={`${styles.back}`}
          src="./common/bg-gold-back.svg"
          alt=""
          height={740}
          width={1920}
        />
        <Image
          className={`${styles.front}`}
          src="./common/bg-gold-front.svg"
          alt=""
          height={740}
          width={1920}
        />
        <Image
          className={`${styles.bubble}`}
          src="./common/img-bubble-yellow.svg"
          alt=""
          height={116}
          width={77}
        />
      </div>
    </div>
  );
};
export default FvBg;
