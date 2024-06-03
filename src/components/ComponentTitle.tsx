import styled from "styled-components";
import { TComponentTitleProps } from "../types/types";

const ComponentTitle = ({ text }: TComponentTitleProps) => (
  <Container>
    <Title>{text}</Title>
  </Container>
);

export default ComponentTitle;

const Container = styled.div`
  width: 80%;
  transform: rotate(3deg);
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
  }
`;

const Title = styled.h2`
  background-color: rgb(44, 73, 77);
  width: fit-content;
  padding: 20px;
  font-size: 75px;
  border-radius: 75px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  @media (max-width: 900px) {
    font-size: 40px;
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
