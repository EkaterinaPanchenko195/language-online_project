import styled from "styled-components";
import { TComponentChooseUsProps } from "../types/types";

const ComponentChooseUs = ({
  img,
  title,
  description,
}: TComponentChooseUsProps) => (
  <Container>
    <BlockImg>
      <Img src={img}></Img>
    </BlockImg>
    <BlockDescription>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </BlockDescription>
  </Container>
);

export default ComponentChooseUs;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1%;
  color: rgb(37, 62, 65);
`;

const BlockImg = styled.div`
  width: 60px;
  height: 60px;
  @media (max-width: 505px) {
    width: 40px;
    height: 40px;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: 505px) {
    width: 40px;
    height: 40px;
  }
`;

const BlockDescription = styled.div`
  font-family: "Rubik", sans-serif;
`;

const Title = styled.h2`
  font-size: 23px;
  margin-bottom: 10px;
  @media (max-width: 505px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  @media (max-width: 505px) {
    font-size: 14px;
  }
`;
