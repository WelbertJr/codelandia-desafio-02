import { FunctionComponent, ReactNode } from "react";
import { DivShoes } from "./containerShoesStyled";

interface ContainerShoesProps {
  children: ReactNode;
}
export const ContainerShoes: FunctionComponent<ContainerShoesProps> = ({
  children,
}) => {
  return <DivShoes>{children}</DivShoes>;
};
