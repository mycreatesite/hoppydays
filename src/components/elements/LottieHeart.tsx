import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/elements/LottieHeart.module.scss"

const lottieHeartParams = {
  container: null,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "/lottie/lottie-heart.json",
  rendererSettings: {
    title: 'Like',
    viewBoxSize: "250 250 300 300",
    preserveAspectRatio: 'none'
  }
};

const LottieHeart = () => {
  const [clicked, setClicked] = useState(false)
  const [lottie, setLottie] = useState<any>(null);
  const heartContainer = useRef(null);
  const lottieHandler = () => {
    if (!clicked) {
      lottie.play();
      setTimeout(() => {
        lottie.pause();
      }, 1400);
      setClicked(true)
    }
  };

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie) {
      lottieHeartParams.container = heartContainer.current;
      const animationClick = lottie.loadAnimation(lottieHeartParams);
      return () => {
        animationClick.destroy();
      };
    }
  }, [lottie]);
  return (
    <div className={`${styles.lottieHeart}`} ref={heartContainer} onClick={lottieHandler}></div>
  );
};
export default LottieHeart;
