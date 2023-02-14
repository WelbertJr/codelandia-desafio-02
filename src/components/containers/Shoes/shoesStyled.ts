import styled from "styled-components";

interface DivShoesProps {
  margin?: string;
}
export const DivShoes = styled.div<DivShoesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebe9ea;
  padding: 7.3rem 8.3rem 7.6rem 8.2rem;
  margin: ${({ margin }) => margin};
  @media (max-width: 1600px) {
    padding: 3.3rem;
    margin: 0 2rem 3.9rem 0;
  }
`;

export const ImageShoes = styled.img`
  height: 100%;
  width: 100%;
  :hover {
    transform: scale(1.3);
    transition: 1s all ease;
  }
  @media (max-width: 1200px) {
    heigth: 15rem;
    width: 25rem;
    margin: 0 1 3.9rem 0;
  }
  @media (max-width: 980px) {
    width: 70%;
  }
`;
