import styles from "@/styles/components/modules/HeadingContent.module.scss";
import { splitTextWithSpan } from "../util/splitTextWithSpan";

type Props = {
  heading: {
    first: string;
    second: string;
  };
  headingJa: string;
};

export default function Heading({ heading, headingJa }: Props) {
  return (
    <>
      <div className={`${styles.headingContent}`}>
        <h1 className={`${styles.heading}`}>
          {splitTextWithSpan(heading.first, 200)}
          <span className={`${styles.outline}`}>
            {splitTextWithSpan(heading.second, 200)}
          </span>
        </h1>
        <p className={`${styles.headingJa}`}>{headingJa}</p>
      </div>
    </>
  );
}
