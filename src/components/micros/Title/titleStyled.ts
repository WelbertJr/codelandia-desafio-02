import styled from "styled-components";

interface TextProps {
  name?: string;
  fontSize: string;
  color: string;
  fontWeight: string;
  margin?: string;
  position?: string;
  left?: string;
  top?: string;
}

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  @media (max-width: 671px) {
    font-size: 2.8rem;
  }
`;

export const SubText = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  @media (max-width: 671px) {
    font-size: 1.6rem;
  }
`;
