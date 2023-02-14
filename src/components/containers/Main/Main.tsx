import { FunctionComponent } from "react";
import { ContainerMain } from "./mainStyled";
import { Section } from "../Section/Section";
interface MainProps {
  bgColor: string;
}
export const Main: FunctionComponent<MainProps> = ({ bgColor }) => {
  return (
    <ContainerMain bgColor={bgColor}>
      <Section padding="1.5rem 0 0 0" name="Section1" />
      <Section padding="6.5rem 10rem 10rem 10rem" />
    </ContainerMain>
  );
};
