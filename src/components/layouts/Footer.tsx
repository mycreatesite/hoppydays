import Image from "next/image";
import Link from "next/link";
import Container from '@/components/layouts/Container'
import styles from "@/styles/components/layouts/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} js-scrollAddClassFooter`}>
      <div className={`${styles.bgLogo}`}>
        <Image
          src="/common/logo-yellow.svg"
          alt=""
          height={218}
          width={1536}
        />
      </div>
      <Container containerClass="commonContainer">
        <p className={`${styles.message}`}>For All of Hoppy Lovers.</p>
        <div className={`${styles.bottom}`}>
          <div className={`${styles.logoGroup}`}>
            <Link href={`https://myscreate.com/`} target="_blank" rel="noopener noreferrer">
              <Image
                src="/common/logo-myc.svg"
                alt="ma-ya&#39;s CREATE"
                height={40}
                width={80}
              />
            </Link>
            <Link href={`https://wicd-02-next.vercel.app/`} target="_blank" rel="noopener noreferrer">
              <Image
                src="/common/logo-wicd.svg"
                alt="WHAT I CAN DO."
                height={20}
                width={80}
              />
            </Link>
          </div>
          <p className={`${styles.copyright}`}>© Copyright 2023 │ ma-ya&apos;s CREATE All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}  
export default Footer