import styled from "styled-components";
import backgroundSection from "../images/01.png";
import { Link } from "react-router-dom";

const MainSection = () => (
  <Container>
    <ContainerTitle>
      <Title>
        Онлайн-школа
        <strong>АНГЛИЙСКОГО ЯЗЫКА</strong>
        <span>"ЛАНГУАГЕ ОНЛАЙН"</span>
      </Title>
    </ContainerTitle>
    <Link to={"/trial-session"}>
      <Button>БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ</Button>
    </Link>
  </Container>
);

export default MainSection;

const Container = styled.section`
  align-items: center;
  background-image: url(${backgroundSection});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  min-height: calc(100vh - 115px);
  padding-bottom: 10px;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
`;

const ContainerTitle = styled.div``;

const Title = styled.h2`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
  font-size: 104px;
  font-weight: 300;
  margin: auto;
  position: relative;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media (max-width: 1120px) {
    align-items: center;
    font-size: 75px;
  }
  @media (max-width: 820px) {
    font-size: 60px;
  }
  @media (max-width: 610px) {
    font-size: 40px;
  }

  strong {
    background-color: rgba(220, 175, 207, 0.6);
    border-radius: 50px;
    font-size: 80px;
    font-weight: 500;
    margin-left: 40px;
    padding: 5px 15px;
    width: fit-content;
    box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);

    @media (max-width: 1120px) {
      font-size: 55px;
    }
    @media (max-width: 820px) {
      font-size: 40px;
    }
    @media (max-width: 610px) {
      font-size: 26px;
      margin-left: 0;
      padding: 8px 10px;
    }
  }

  span {
    font-size: 66px;
    font-weight: 400;
    line-height: 1.55;
    @media (max-width: 1120px) {
      font-size: 52px;
    }
    @media (max-width: 820px) {
      font-size: 42px;
    }
    @media (max-width: 610px) {
      font-size: 30px;
    }
  }
`;

const Button = styled.button`
  background-color: rgba(146, 224, 217, 0.6);
  border: none;
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-left: 680px;
  padding: 30px;
  position: relative;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: rgba(220, 175, 207, 0.6);
  }
  @media (max-width: 1120px) {
    font-size: 16px;
    font-weight: 500;
    padding: 20px;
    margin-left: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 820px) {
    font-size: 14px;
    padding: 14px;
  }
  @media (max-width: 610px) {
    font-size: 15px;
  }
`;
