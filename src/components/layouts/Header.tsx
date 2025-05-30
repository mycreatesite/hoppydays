import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import Container from "@/components/layouts/Container";
import ButtonA11y from "@/components/elements/ButtonA11y";
import styles from "../../styles/components/layouts/Header.module.scss";

const Header = () => {

  const router = useRouter();
  const isTopPage = router.pathname === "/";

  return (
    <header className={`${styles.header} js-scrollAddClass`}>
      <Container containerClass="commonContainer">
        <div className={`${styles.content}`}>
          { isTopPage ? (
            <h1 className={`${styles.logo}`}>
              <Link href="/" aria-label="Home">
                <Image
                  src="/common/logo.svg"
                  alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
                  height={30}
                  width={212}
                  loading="eager"
                  priority={true}
                />
              </Link>
            </h1>
            ) : (
            <div className={`${styles.logo}`}>
              <Link href="/" aria-label="Home">
                <Image
                  src="/common/logo.svg"
                  alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
                  height={30}
                  width={212}
                  loading="eager"
                  priority={true}
                />
              </Link>
            </div>
          )}
          <nav className={`${styles.nav}`}>
            <ul>
              <li><Link href="/recommend" aria-label="Recommend"><span data-menu="Recommend">Recommend</span></Link></li>
              <li><Link href="/nippo" aria-label="Nippo"><span data-menu="Nippo">Nippo</span></Link></li>
            </ul>
            <ButtonA11y/>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;
