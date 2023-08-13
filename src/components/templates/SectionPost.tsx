import React from "react";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "@/styles/components/templates/SectionPost.module.scss";
import Container from "../layouts/Container";
import ButtonEl from "../elements/ButtonEl";

type Props = {
  children?: ReactNode;
  setting: {
    sectionClass: string;
    shoulder: string;
    titleFirst: string;
    titleSecond: string;
    linkURL: string;
  };
};

const SectionPost = ({ children, setting }: Props) => {
  return (
    <>
      <section className={`${styles.post} ${setting.sectionClass}`}>
        <Container containerClass="commonContainer">
          <div className={`${styles.titleGroup}`}>
            <p className={`${styles.shoulder}`}>{setting.shoulder}</p>
            <h2 className={`${styles.title}`}>
              {setting.titleFirst}
              <span>{setting.titleSecond}</span>
            </h2>
          </div>
        </Container>
        <div className={`${styles.sliderOuter}`}>
          <Container containerClass="slideContainer">
            {children}
          </Container>
        </div>
        <Container containerClass="commonContainer">
          <div className={`${styles.link}`}>
            <ButtonEl
              btnSetting={{
                url: `/${setting.linkURL}/`,
                icon: "arrow-right"
              }}
            >
              一覧ページへ
            </ButtonEl>
          </div>
        </Container>
        <Image
          className={`${styles.bubble}`}
          src="./common/img-bubble-white.svg"
          alt=""
          height={92}
          width={74}
        />
      </section>
    </>
  );
};

export default SectionPost;
