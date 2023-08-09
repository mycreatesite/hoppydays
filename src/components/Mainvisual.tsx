import Image from "next/image";
import { ReactNode } from "react";
import FvBg from "./FvBg";
import styles from "@/styles/Mainvisual.module.scss";

type Props = {
  children?: ReactNode;
  fvbgClass?: string;
};

const Mainvisual = ({ children, fvbgClass }: Props) => {
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
    </section>
  );
};
export default Mainvisual;
