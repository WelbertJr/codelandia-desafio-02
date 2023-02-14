import { FunctionComponent } from "react";
import { Title } from "../../micros/Title/Title";
import { ContainerFooter } from "./footerStyled";

interface SectionProps {
  bgColor: string;
}
export const Footer: FunctionComponent<SectionProps> = ({ bgColor }) => {
  return (
    <ContainerFooter bgColor={bgColor}>
      <Title
        margin="0"
        title="Todos os direitos reservados."
        color="#F9F9F9"
        fontSize="1.8rem"
        fontWeight="500"
      />
    </ContainerFooter>
  );
};
