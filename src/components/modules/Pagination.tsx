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
  //共通変数
  const router = useRouter();
  const paginationRange = 2;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const maxPage = Math.ceil(totalCount / perPage);
  const pageArray = range(1, maxPage);

  //search用変数
  const routerQueryKeyword = router.query.keyword;
  const routerQueryPage =
    typeof router.query.page === "string" ? parseInt(router.query.page) : 1;
  const displayedSearchPageArray = pageArray.filter((element, index) => {
    const startIndex = pageArray.indexOf(routerQueryPage) - paginationRange;
    const endIndex = pageArray.indexOf(routerQueryPage) + paginationRange;
    return index >= startIndex && index <= endIndex;
  });

  //search以外用変数
  const currentPage =
    typeof router.query.id === "string" ? parseInt(router.query.id) : 1;
  const displayedPageArray = pageArray.filter((element, index) => {
    const startIndex = pageArray.indexOf(currentPage) - paginationRange;
    const endIndex = pageArray.indexOf(currentPage) + paginationRange;
    return index >= startIndex && index <= endIndex;
  });

  return (
    maxPage > 1 && (
      <nav className={`${styles.pagination}`} aria-label="pagination">
        <Container containerClass="largeContainer">
          {isSearch ? (
            // searchページ
            <ul className={`${styles.list}`}>
              {routerQueryPage !== 1 && (
                <>
                  <li className={`${styles.item} ${styles.first}`}>
                    <Link
                      href={`/${path}/search?keyword=${routerQueryKeyword}&page=1`}
                    >
                      {"<<"}
                    </Link>
                  </li>
                  <li className={`${styles.item} ${styles.previous}`}>
                    <Link
                      href={`/${path}/search?keyword=${routerQueryKeyword}&page=${
                        routerQueryPage - 1
                      }`}
                    >
                      {"<"}
                    </Link>
                  </li>
                </>
              )}
              {displayedSearchPageArray.map((item, index) =>
                routerQueryPage === item ? (
                  <li key={index} className={`${styles.item} ${styles.active}`}>
                    <span>{item}</span>
                  </li>
                ) : (
                  <li key={index} className={`${styles.item}`}>
                    <Link
                      href={`/${path}/search?keyword=${routerQueryKeyword}&page=${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              {routerQueryPage !== maxPage && (
                <>
                  <li className={`${styles.item} ${styles.next}`}>
                    <Link
                      href={`/${path}/search?keyword=${routerQueryKeyword}&page=${
                        routerQueryPage + 1
                      }`}
                    >
                      {">"}
                    </Link>
                  </li>
                  <li className={`${styles.item} ${styles.last}`}>
                    <Link
                      href={`/${path}/search?keyword=${routerQueryKeyword}&page=${maxPage}`}
                    >
                      {">>"}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          ) : (
            // searchページ以外
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
          )}
        </Container>
      </nav>
    )
  );
}
