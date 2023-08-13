import { ReactNode } from "react";
import Link from "next/link";
import styles from "@/styles/components/elements/ButtonEl.module.scss";
import { HiOutlineArrowRight } from "react-icons/hi"
import { HiOutlineArrowLeft } from "react-icons/hi"

type Props = {
  children?: ReactNode;
  /** ボタンの設定 */
  btnSetting?: {
    /** リンク先URL */
    url?: string;
    /** サイズ */
    size?: "size-default" | "size-small";
    /** アイコンの種類 */
    icon?: "none" | "arrow-right" | "arrow-left";
    /** アイコンの位置 */
    iconPosition?: "right" | "left";
    /** trueでtarget="_blank"およびrel="noopener noreferrer"を付与 */
    targetBlank?: boolean;
  };
};

/**
 * ボタンコンポーネント
 * @param btnSetting ボタンの設定 (url / size / iconPosition / targetBlank)
 */
const ButtonEl = ({children, btnSetting}: Props) => {
  const defaultBtnSetting = {
    url: "/",
    size: "size-default",
    icon: "none",
    iconPosition: "right",
    targetBlank: false,
  }
  const mergedSetting = { ...defaultBtnSetting, ...btnSetting };

  const Icon = {
    "arrow-right": HiOutlineArrowRight,
    "arrow-left": HiOutlineArrowLeft,
  }[mergedSetting.icon];

  return (
    <Link
      href={`${mergedSetting.url}`}
      className={`${styles.btn} ${mergedSetting.size} ${mergedSetting.iconPosition}`}
      target={mergedSetting.targetBlank ? "_blank" : "_self"}
      rel={mergedSetting.targetBlank ? "noopener noreferrer" : ""}
    >
      {Icon && mergedSetting.iconPosition === "left" && <Icon className={`${styles.icon}`}/>}
      {children}
      {Icon && mergedSetting.iconPosition === "right" && <Icon className={`${styles.icon}`}/>}
    </Link>
  );
};
export default ButtonEl;
