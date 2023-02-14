import { FunctionComponent, ReactNode } from "react";
import { Text, SubText } from "./titleStyled";

interface TitleProps {
  name?: string;
  fontSize: string;
  color: string;
  title?: string;
  fontWeight: string;
  margin?: string;
  position?: string;
  left?: string;
  top?: string;
  children?: ReactNode;
}
export const Title: FunctionComponent<TitleProps> = ({
  name,
  fontSize,
  color,
  title,
  fontWeight,
  margin,
  position,
  left,
  top,
}) => {
  if (name === "Title")
    return (
      <Text
        name={name}
        margin={margin}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        position={position}
        left={left}
        top={top}
      >
        {title}
      </Text>
    );
  else
    return (
      <SubText
        name={name}
        margin={margin}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        position={position}
        left={left}
        top={top}
      >
        {title}
      </SubText>
    );
};
