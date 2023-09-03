import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layouts/Container";
import ShareSns from "../modules/ShareSns";
import styles from "@/styles/components/layouts/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} js-scrollAddClassFooter`}>
      <div className={`${styles.bgLogo}`}>
        <Image
          src="/common/logo-yellow.svg"
          alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
          height={218}
          width={1536}
        />
      </div>
      <Container containerClass="commonContainer">
        <div className={`${styles.top}`}>
          <p className={`${styles.message}`}>For All of Hoppy Lovers.</p>
        </div>
        <div className={`${styles.bottom}`}>
          <div className={`${styles.content}`}>
            <p className={`${styles.about}`}>
              <Link href="/about">About this website</Link>
            </p>
            <ShareSns color="gray"/>
            <div className={`${styles.logoGroup}`}>
              <Link
                href={`https://myscreate.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/common/logo-myc.svg"
                  alt="ma-ya&#39;s CREATE"
                  height={40}
                  width={80}
                />
              </Link>
              <Link
                href={`https://wicd-02-next.vercel.app/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/common/logo-wicd.svg"
                  alt="WHAT I CAN DO."
                  height={20}
                  width={80}
                />
              </Link>
            </div>
            <p className={`${styles.copyright}`}>
              © Copyright 2023 │ ma-ya&apos;s CREATE All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
