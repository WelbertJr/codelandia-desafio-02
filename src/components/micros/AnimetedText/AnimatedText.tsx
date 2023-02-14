import { FunctionComponent, useEffect, useState } from "react";
import { AnimationDescription } from "./animatedTextStyled";

interface AnimatedComponentProps {
  text: string;
}
export const AnimatedText: FunctionComponent<AnimatedComponentProps> = (
  props
) => {
  const [text, setText] = useState("");
  const escreverNaTela = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), 50);
    }
  };
  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text));
  }, []);
  return <AnimationDescription>{text}</AnimationDescription>;
};
