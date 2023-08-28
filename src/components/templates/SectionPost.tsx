import React from "react";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "@/styles/components/templates/SectionPost.module.scss";
import Container from "../layouts/Container";
import Button from "../elements/Button";
import { splitTextWithSpan } from "../util/splitTextWithSpan";

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
      <section className={`${styles.post} ${setting.sectionClass} js-scrollAddClass`}>
        <Container containerClass="commonContainer overFlowHidden">
          <div className={`${styles.titleGroup}`}>
            <h2 className={`${styles.shoulder}`}>{setting.shoulder}</h2>
            <p className={`${styles.title} js-scrollParallax-post`}>
              {splitTextWithSpan(setting.titleFirst, 200)}
              <span className={`${styles.outline}`}>{splitTextWithSpan(setting.titleSecond, 200)}</span>
            </p>
          </div>
        </Container>
        <div className={`${styles.sliderOuter}`}>
          <Container containerClass="slideContainer js-scrollParallax-slideContainer">
            {children}
          </Container>
        </div>
        <Container containerClass="commonContainer">
          <div className={`${styles.link}`}>
            <Button
              btnSetting={{
                url: `/${setting.linkURL}/`,
                icon: "arrow-right"
              }}
            >
              一覧ページへ
            </Button>
          </div>
        </Container>
        <div className={`${styles.bubbleOuter} js-scrollParallax-bubble`}>
          <Image
            className={`${styles.bubble}`}
            src="/common/img-bubble-white.svg"
            alt=""
            height={92}
            width={74}
          />
        </div>
      </section>
    </>
  );
};

export default SectionPost;
