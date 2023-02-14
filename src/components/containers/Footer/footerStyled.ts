import styled from "styled-components";
interface ContainerFooterProps {
  bgColor: string;
}
export const ContainerFooter = styled.footer<ContainerFooterProps>`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
`;
