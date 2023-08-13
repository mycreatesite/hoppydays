export const splitTextWithSpan = (text: string, delay: number = 50): JSX.Element[] => {
  const characters = text.split('');
  return characters.map((char, index) => (
    <span key={index} style={{transitionDelay: `${index * delay}ms`}}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};