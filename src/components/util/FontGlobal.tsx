import { playfairDisplay } from "@/components/util/font";
import { sawarabiGothic } from "@/components/util/font";

export const FontGlobal = () => {
  return (
    <style jsx global>{`
    body {
      font-family: ${playfairDisplay.style.fontFamily},
        ${sawarabiGothic.style.fontFamily}, serif;
    }
  `}</style>
  )
};
