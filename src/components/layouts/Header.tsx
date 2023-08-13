import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import Container from "@/components/layouts/Container";
import styles from "../../styles/components/layouts/Header.module.scss";

const Header = () => {

  const router = useRouter();
  const isTopPage = router.pathname === "/";

  return (
    <header className={`${styles.header}`}>
      <Container containerClass="commonContainer">
        <div className={`${styles.content}`}>
          { isTopPage ? (
            <h1 className={`${styles.logo}`}>
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.svg"
                  alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
                  height={30}
                  width={212}
                />
              </Link>
            </h1>
            ) : (
            <div className={`${styles.logo}`}>
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.svg"
                  alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
                  height={30}
                  width={212}
                />
              </Link>
            </div>
          )}
          <nav className={`${styles.nav}`}>
            <ul>
              <li><Link href="/recommend" aria-label="Recommend">Recommend</Link></li>
              <li><Link href="/nippo" aria-label="Nippo">Nippo</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;
