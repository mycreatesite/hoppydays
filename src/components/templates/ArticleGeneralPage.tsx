import { ReactNode } from 'react';
import FvBg from "@/components/modules/FvBg";
import styles from "@/styles/components/templates/ArticleGeneralPage.module.scss";
import Container from "@/components/layouts/Container";
import HeadingContent from '../modules/HeadingContent';
import { sawarabiGothic } from "@/components/util/font";

type Props = {
  heading: {
    first: string;
    second: string;
  };
  headingJa: string;
  children?: ReactNode;
};

export default function SectionGeneralPage({ heading, headingJa, children }: Props) {
  return (
    <>
      <article className={`${styles.generalPage} js-scrollAddClass`}>
        <FvBg fvBgClass="underPage" />
        <Container containerClass="smallContainer">
          <HeadingContent
            heading={{ first: heading.first, second: heading.second }}
            headingJa={headingJa}
          />
          <div className={`${styles.bodyContent} ${sawarabiGothic.className}`}>
            { children }
          </div>
        </Container>
      </article>
    </>
  );
}
