import { FunctionComponent } from "react";
import { Title } from "../../micros/Title/Title";
import { ContainerShoes } from "../../micros/ContainerShoes/ContainerShoes.";
import { Shoes } from "../Shoes/Shoes";
import {
  BgImage,
  ContainerSection1,
  DivTitle,
  ContainerSection2,
} from "./sectionStyled";
import { AnimatedText } from "../../micros/AnimetedText/AnimatedText";

interface SectionProps {
  padding: string;
  name?: string;
}
export const Section: FunctionComponent<SectionProps> = ({ padding, name }) => {
  if (name === "Section1")
    return (
      <ContainerSection1 padding={padding} name={name}>
        <Title
          margin="0 0 1.5rem 0"
          title="JordanShoes"
          color="#181818"
          fontSize="2.4rem"
          fontWeight="600"
        />
        <BgImage />
        <DivTitle>
          <Title
            name="Title"
            margin="0 0 2.6rem 0"
            title="A melhor loja de Jordan"
            color="#F9F9F9"
            fontSize="4.8rem"
            fontWeight="600"
          />
          <AnimatedText
            text="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan."
          />
        </DivTitle>
      </ContainerSection1>
    );
  else
    return (
      <ContainerSection2 padding={padding}>
        <Title
          name="Title"
          margin="0 0 1.7rem 0"
          title="Destaques"
          color="#181818"
          fontSize="3.2rem"
          fontWeight="600"
        />
        <Title
          margin="0 0 6.5rem 0"
          title="Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. "
          color="#474747"
          fontSize="2rem"
          fontWeight="00"
        />
        <ContainerShoes>
          <Shoes src="src/img/1.png" alt="Imagem 1" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/2.png" alt="Imagem 2" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/3.png" alt="Imagem 3" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/4.png" alt="Imagem 4" margin="0 0rem 3.9rem 0" />
          <Shoes src="src/img/5.png" alt="Imagem 5" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/6.png" alt="Imagem 6" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/7.png" alt="Imagem 7" margin="0 2rem 3.9rem 0" />
          <Shoes src="src/img/8.png" alt="Imagem 8" margin="0 0rem 3.9rem 0" />
        </ContainerShoes>
      </ContainerSection2>
    );
};
