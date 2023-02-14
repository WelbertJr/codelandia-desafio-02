import styled from "styled-components";

interface ContainerProps{
  bgColor: string;
}
export const ContainerHeader = styled.header<ContainerProps>`
  background: ${({bgColor})=> bgColor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
`;
