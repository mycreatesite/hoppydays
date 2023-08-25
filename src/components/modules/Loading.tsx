import styles from "@/styles/components/modules/Loading.module.scss";

export default function Loading() {
  return (
    <>
      <div className={`${styles.loading}`}>
        <div className={`${styles.spinner}`}>
          <div className={`${styles.dot1}`}></div>
          <div className={`${styles.dot2}`}></div>
        </div>
      </div>
    </>
  );
}
