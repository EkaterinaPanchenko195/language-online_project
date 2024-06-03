import styled from "styled-components";
import forteachers from "../images/forTeachers.jpg";
import { Link } from "react-router-dom";

const ForTeachers = () => (
  <Container>
    <ContainerWrapper>
      <BlockM>
        <Img />
      </BlockM>
      <Block>
        <Wrapper>
          <BlockTitle>Наши преподаватели, какие они?</BlockTitle>
          <BlockDescription>
            <span>✎ </span>профессионалы своего дела, подтвердившие знания на
            международных экзаменах
          </BlockDescription>
          <BlockDescription>
            <span>✎ </span>искренние и открытые новому
          </BlockDescription>
          <BlockDescription>
            <span>✎ </span>креативные
          </BlockDescription>
          <BlockDescription>
            <span>✎ </span> способные видеть уникальность в каждом
          </BlockDescription>
        </Wrapper>
        <Wrapper>
          <BlockTitle>
            Ты тоже можешь стать частью нашей команды и получить:
          </BlockTitle>
          <BlockDescription>
            <span>◍</span> достойную оплату
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> оплаченные лицензии и подписки
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> стабильную занятость
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> свободный график
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> все платные материалы — бесплатно
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> профессиональное развитие, методическую и
            психологическую поддержку
          </BlockDescription>
          <BlockDescription>
            <span>◍</span> возможность реализовать свой потенциал
          </BlockDescription>
        </Wrapper>
        <Wrapper>
          <BlockTitle>Если ты:</BlockTitle>
          <BlockDescription>
            <span>☆</span> владеешь английским на уровне С1 и выше
          </BlockDescription>
          <BlockDescription>
            <span>☆</span> имеешь опыт преподавания
          </BlockDescription>
          <BlockDescription>
            <span>☆</span> горишь желанием развиваться
          </BlockDescription>
          <BlockDescription>
            <span>☆</span> интересуешься сферой IT или хотел бы с ней
            познакомиться
          </BlockDescription>
          <BlockDescription>
            <span>☆</span> видишь себя частью нашего крутого коммьюнити
          </BlockDescription>
        </Wrapper>
        <Description>
          — жми скорее на кнопку и оставляй заявку, мы будем рады познакомиться!
        </Description>
        <BlockButton>
          <LinkNavigation to="/applicationForTeam">
            <Button>Хочу в команду</Button>
          </LinkNavigation>
        </BlockButton>
      </Block>
    </ContainerWrapper>
  </Container>
);

export default ForTeachers;

const LinkNavigation = styled(Link)``;

const BlockButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  min-height: 120vh;
  color: rgb(44, 73, 77);
  display: flex;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  gap: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-bottom: 40px;
  @media (max-width: 1235px) {
    padding-top: 50px;
    justify-content: center;
  }
  @media (max-width: 580px) {
    width: 90%;
  }
`;

const BlockM = styled.div`
  margin-right: 5%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1235px) {
    display: none;
  }
`;
const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: fit-content;
  @media (max-width: 1235px) {
    background-color: #efefef;
    padding: 27px;
    border-radius: 30px;
  }
`;

const Img = styled.div`
  height: 100%;
  background-image: url(${forteachers});
  width: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  @media (max-width: 1400px) {
    width: 505px;
  }
`;
const BlockTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  @media (max-width: 580px) {
    font-size: 22px;
  }
`;
const BlockDescription = styled.p`
  line-height: 35px;
  span {
    font-weight: 900;
  }
  @media (max-width: 580px) {
    line-height: 30px;
    font-size: 16px;
  }
`;
const Wrapper = styled.div`
  margin-bottom: 70px;
`;
const Description = styled.p`
  padding-top: 50px;
  text-decoration: dashed;
  text-decoration-style: underline double #ddb0cf;
  margin-bottom: 50px;
  font-weight: 600;
  @media (max-width: 580px) {
    font-size: 17px;
  }
`;

const Button = styled.button`
  background-color: #2d4a4e;
  border: none;
  padding: 18px 30px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  width: fit-content;

  &:hover {
    background-color: rgb(221, 176, 207);
  }
  @media (max-width: 1295px) {
    font-size: 16px;
  }
  @media (max-width: 1140px) {
    font-size: 20px;
  }
`;
