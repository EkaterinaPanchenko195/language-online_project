import styled from "styled-components";
import { TComponentPriceProps } from "../types/types";
import { PropsWithChildren } from "react";

const ComponentPrice = ({
  text,
  priceText,
  description,
  children,
}: PropsWithChildren<TComponentPriceProps>) => (
  <Container>
    <Title>{text}</Title>
    <TitlePrice>{priceText}</TitlePrice>
    <Description>{description}</Description>

    {children}
  </Container>
);

export default ComponentPrice;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: rgb(44, 73, 77);
  font-size: 21px;
  font-family: "Rubik", sans-serif;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 1295px) {
    font-size: 19px;
  }
  @media (max-width: 1140px) {
    font-size: 21px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

const TitlePrice = styled.h2`
  color: rgb(44, 73, 77);
  font-family: "Rubik", sans-serif;
  margin-bottom: 20px;
  @media (max-width: 1295px) {
    font-size: 14px;
  }
  @media (max-width: 1140px) {
    font-size: 19px;
  }
`;

const Description = styled.h3`
  color: rgb(44, 73, 77);
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;
