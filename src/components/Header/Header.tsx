import { FunctionComponent } from "react";
import { ContainerHeader } from "./headerStyled";

interface HeaderProps{
  bgColor: string;
}
  export const Header: FunctionComponent<HeaderProps> = ({bgColor}) => {
  return <ContainerHeader bgColor={bgColor}></ContainerHeader>;
};
