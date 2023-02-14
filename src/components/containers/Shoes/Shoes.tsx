import { FunctionComponent } from "react";
import { DivShoes, ImageShoes } from "./shoesStyled";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
interface ShoesProps {
  src: string;
  margin?: string;
  alt: string;
}
export const Shoes: FunctionComponent<ShoesProps> = ({ src, margin, alt }) => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <DivShoes margin={margin} data-aos="zoom-in">
      <ImageShoes src={src} alt={alt} />
    </DivShoes>
  );
};
