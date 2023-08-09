import Link from "next/link";
import Image from 'next/image'
import Container from "@/components/layouts/Container";
import styles from "../../styles/Header.module.scss"

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Container containerClass="commonContainer">
        <div className={`${styles.content}`}>
          <div className={`${styles.logo}`}>
            <Link href="/">
              <Image
                src="./logo.svg"
                alt={process.env.NEXT_PUBLIC_SITE_NAME as string}
                height={30}
                width={212}
              />
            </Link>
          </div>
          <nav className={`${styles.nav}`}>
            <ul>
              <li><Link href="/recommend">Recommend</Link></li>
              <li><Link href="/nippo">Nippo</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default Header;
