import styles from "@/styles/components/elements/ButtonA11y.module.scss";
import { AiFillPauseCircle } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function ButtonA11y() {
  const [isPaused, setIsPaused] = useState(false);
  const toggleButtonA11y = () => {
    const toggledFlag = !isPaused;
    setIsPaused(toggledFlag);
    toggledFlag ? document.body.classList.add('is-paused') : document.body.classList.remove('is-paused');
    initScrollAddClass(toggledFlag);
  }
  useEffect(() => {
    initScrollAddClass(isPaused);
  });
  function initScrollAddClass(flag: Boolean){
    if(flag){
      const scrollAddClassElements = document.querySelectorAll('.js-scrollAddClass, .js-scrollAddClassFooter');
      scrollAddClassElements.forEach(el => {
        el.classList.add('is-active');
      });
    }
  }
  return (
    <>
      <button onClick={toggleButtonA11y} className={`${styles.btn}`}>
        {
          isPaused ? <AiFillPlayCircle title="play animation" /> : <AiFillPauseCircle title="pause animation" />
        }
      </button>
    </>
  );
}
