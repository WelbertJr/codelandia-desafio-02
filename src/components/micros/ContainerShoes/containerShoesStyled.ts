import styled from "styled-components";
export const DivShoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;
