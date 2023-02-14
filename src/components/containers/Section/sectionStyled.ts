import styled from "styled-components";

interface ContainerSection1Props {
  padding: string;
  name: string;
}
export const ContainerSection1 = styled.section<ContainerSection1Props>`
  height: 43.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => padding};
`;

export const BgImage = styled.div`
  background-image: url(src/img/wallpaper.jpeg);
  height: 37.8rem;
  width: 100%;
  color: #181818;
  filter: brightness(50%);
  background-position: 10% 50%;
  background-size: cover;
  object-fit: fill;
  position: relative;
  @media (max-width: 662px) {
    padding: 12.2rem 4.4rem 12.2rem 2rem;
  }
`;

export const DivTitle = styled.div`
  width: 63.7rem;
  height: 16.1rem;
  position: absolute;
  left: 10rem;
  top: 22rem;
  @media (max-width: 764px) {
    left: 1rem;
  }
  @media (max-width: 671px) {
    width: 100%;
    left: 0;
  }
`;
interface ContainerSection2Props {
  padding: string;
}
export const ContainerSection2 = styled.section<ContainerSection2Props>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => padding};
  @media (max-width: 920px) {
    padding: 5rem 2rem;
  }
`;
