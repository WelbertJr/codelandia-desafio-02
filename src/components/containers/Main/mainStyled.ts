import styled from "styled-components";

interface ContainerMainProps {
  bgColor: string;
}
export const ContainerMain = styled.main<ContainerMainProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ bgColor }) => bgColor};
`;
