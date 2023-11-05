import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@/components/layouts/Container";
import styles from "@/styles/components/modules/Pagination.module.scss";

type Props = {
  totalCount: number;
  perPage: number;
  path: string;
  isSearch?: boolean;
};

export default function Pagination({
  totalCount,
  perPage,
  path,
  isSearch,
}: Props) {
  
  const router = useRouter();
  const routerQueryId = router.query.id;
  const currentPage =
    typeof routerQueryId === "string" ? parseInt(routerQueryId) : 1;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const maxPage = Math.ceil(totalCount / perPage);
  const pageArray = range(1, maxPage);

  const displayedPageArray = pageArray.filter((element, index) => {
    const startIndex = pageArray.indexOf(currentPage) - 2;
    const endIndex = pageArray.indexOf(currentPage) + 2;
    return index >= startIndex && index <= endIndex;
  });

  return (
    <nav className={`${styles.pagination}`} aria-label="pagination">
      <Container containerClass="largeContainer">
        <ul className={`${styles.list}`}>
          {currentPage !== 1 && (
            <>
              <li className={`${styles.item} ${styles.first}`}>
                <Link href={`/${path}/page/1`}>{"<<"}</Link>
              </li>
              <li className={`${styles.item} ${styles.previous}`}>
                <Link href={`/${path}/page/${currentPage - 1}`}>{"<"}</Link>
              </li>
            </>
          )}
          {displayedPageArray.map((item, index) =>
            currentPage === item ? (
              <li key={index} className={`${styles.item} ${styles.active}`}>
                <span>{item}</span>
              </li>
            ) : (
              <li key={index} className={`${styles.item}`}>
                <Link href={`/${path}/page/${item}`}>{item}</Link>
              </li>
            )
          )}
          {currentPage !== maxPage && (
            <>
              <li className={`${styles.item} ${styles.next}`}>
                <Link href={`/${path}/page/${currentPage + 1}`}>{">"}</Link>
              </li>
              <li className={`${styles.item} ${styles.last}`}>
                <Link href={`/${path}/page/${maxPage}`}>{">>"}</Link>
              </li>
            </>
          )}
        </ul>
      </Container>
    </nav>
  );
}
