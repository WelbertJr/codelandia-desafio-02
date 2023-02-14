import { FunctionComponent } from "react";
import { ContainerHeader } from "./headerStyled";
import { Title } from "../../micros/Title/Title";

interface HeaderProps {
  bgColor: string;
}
export const Header: FunctionComponent<HeaderProps> = ({ bgColor }) => {
  return (
    <ContainerHeader bgColor={bgColor}>
      <Title
        margin="0"
        fontSize="1.6rem"
        color="#F9F9F9"
        title="Ganhe R$ 10,00 de desconto no frete"
        fontWeight="500"
      />
    </ContainerHeader>
  );
};
