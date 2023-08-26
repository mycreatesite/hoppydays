import styles from "@/styles/components/modules/HeadingContent.module.scss";
import { splitTextWithSpan } from "../util/splitTextWithSpan";

type Props = {
  hasH1?: boolean;
  heading: {
    first: string;
    second: string;
  };
  headingJa: string;
};

export default function Heading({ hasH1 = true, heading, headingJa }: Props) {
  return (
    <>
      <div className={`${styles.headingContent}`}>
        <p className={`${styles.heading}`}>
          {splitTextWithSpan(heading.first, 200)}
          <span className={`${styles.outline}`}>
            {splitTextWithSpan(heading.second, 200)}
          </span>
        </p>
        {hasH1 ? (
          <h1 className={`${styles.headingJa}`}>{headingJa}</h1>
        ) : (
          <p className={`${styles.headingJa}`}>{headingJa}</p>
        )}
      </div>
    </>
  );
}
