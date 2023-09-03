import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LogoX from "../elements/LogoX";
import copy from "clipboard-copy";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import styles from "@/styles/components/modules/ShareSns.module.scss";
import { sawarabiGothic } from "../util/font";

type Props = {
  /** カラータイプ */
  color: "gray" | "black";
};

export default function ShareSns({ color }: Props) {
  const router = useRouter();
  const currentURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  const [isCopied, setIsCopied] = useState(false);
  const handleCurrentUrlCopy = () => {
    copy(currentURL).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  return (
    <>
      <div className={`${styles.shareSns} ${styles[color]}`}>
        <div className={`${styles.text}`}>SHARE</div>
        <Link
          className={`${styles.sns}`}
          href={`http://twitter.com/share?url=${currentURL}&hashtags=HOPPYDAYS`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoX />
        </Link>
        <Link
          className={`${styles.sns}`}
          href={`http://www.facebook.com/share.php?u=${currentURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook title="share facebook" />
        </Link>
        <button
          onClick={handleCurrentUrlCopy}
          aria-label="copy URL"
          className={`${styles.sns} ${styles.button}`}
        >
          <AiOutlineLink className={`${styles.icon}`} />
          <span
            className={`${isCopied && styles["is-active"]} ${styles.copied} ${
              sawarabiGothic.className
            }`}
          >
            Copied URL
          </span>
        </button>
      </div>
    </>
  );
}
