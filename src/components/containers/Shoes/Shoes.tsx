import { FunctionComponent, ReactNode } from "react";
import { DivShoes, ImageShoes } from "./shoesStyled";

interface ShoesProps {
  src: string;
  margin?: string;
  alt: string;
}
export const Shoes: FunctionComponent<ShoesProps> = ({ src, margin, alt }) => {
  return (
    <DivShoes margin={margin}>
      <ImageShoes src={src} alt={alt} />
    </DivShoes>
  );
};
