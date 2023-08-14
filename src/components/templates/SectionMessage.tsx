import styles from "@/styles/components/templates/SectionMessage.module.scss";
import Image from "next/image";
import Container from "@/components/layouts/Container";
import { playfairDisplay } from "@/components/util/font";
import { sawarabiGothic } from "@/components/util/font";
import { splitTextWithSpan } from "../util/splitTextWithSpan";

const SectionMessage = () => {
  return (
    <section className={`${styles.message} js-scrollAddClass`}>
      <Container containerClass="commonContainer">
        <div className={`${styles.messageGroup}`}>
          <p className={`${styles.ja} ${sawarabiGothic.className}`}>
            {splitTextWithSpan("低カロリー・プリン体ゼロで健康志向")}
            <br />
            {splitTextWithSpan("どんなつまみにもベストマッチ")}
            <br />
            {splitTextWithSpan("今日もあなたのそばに")}
            <br />
            {splitTextWithSpan("Hoppy brews your life.")}
          </p>
          <p className={`${styles.en} ${playfairDisplay.className}`}>
            Low calorie, zero purine, health conscious.
            <br />
            The best match for any Japanese TSUMAMI.
            <br />
            It&apos;ll be by your side today too.
            <br />
            Hoppy brews your life.
          </p>
        </div>
      </Container>
      <div className={`${styles.bubbleOuter} js-scrollParallax-bubble`}>
        <Image
          className={`${styles.bubble}`}
          src="/common/img-bubble-white.svg"
          alt=""
          height={132}
          width={107}
        />
      </div>
    </section>
  );
};
export default SectionMessage;
