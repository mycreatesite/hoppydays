import { useRouter } from "next/router";
import styles from "../../styles/components/modules/SearchGroup.module.scss";
import { HiOutlineSearch } from "react-icons/hi";
import {
  HandleClickSearchButton,
  HandlePressSearchEnter,
} from "@/components/util/handleSearchFunctions";

type Props = {
  keyword: string;
};

export default function SearchGroup({ keyword }: Props) {
 
  const router = useRouter();

  return (
    <>
      <div className={`${styles.inputRow}`}>
        <div className={`${styles.inputGroup}`}>
          <input
            id="searchInput"
            className={`${styles.searchInput}`}
            defaultValue={keyword || ""}
            placeholder="検索キーワードを入力"
            onKeyDown={(e) => HandlePressSearchEnter(router, e)}
          />
          <button
            aria-label="Search"
            className={`${styles.searchButton}`}
            onClick={() => HandleClickSearchButton(router)}
          >
            <HiOutlineSearch className={`${styles.icon}`} />
          </button>
        </div>
      </div>
    </>
  );
}
