import styled from "styled-components";
import aboutMe from "../images/aboutMe.png";
import ComponentTitle from "../components/ComponentTitle";

const AboutMe = () => (
  <Container>
    <ComponentTitle text={"Об основателе"} />;
    <Section>
      <BlockImg>
        <Img></Img>
        <TitleImg>Милана Литвинко </TitleImg>
      </BlockImg>
      <Block>
        <BlockDescription>
          <Item>Преподает английский более 4 лет</Item>
          <ItemWhite>Уровень владения английским — С1</ItemWhite>
          <ItemWhite>
            Работает фулстек разработчиком в Московской компании 3 года
          </ItemWhite>
          <Item>
            Разработала срм-платформу для языкового центра "ЛАНГУАГЕ ОНЛАЙН"
          </Item>
          <Item>
            Ученики благодарят за улётную атмосферу на занятиях,
            незамедлительный прогресс и уроки по интересам
          </Item>
          <ItemWhite>
            Обучает реальному английскому, который нужен в IT сфере или
            путешествиях по миру
          </ItemWhite>
        </BlockDescription>
        <AdditionalInformation>
          <DescriptionAdditional>
            «Своей миссией в английском я считаю давать людям качественное и
            одновременно увлекательное образование, способность видеть
            уникальность в каждом ученике, мотивировать идти вперед и верить в
            свои силы. Только так достигаются цели и сбываются мечты»
          </DescriptionAdditional>
          <Author>Милана Литвинко, основатель «ЛАНГУАГЕ ОНЛАЙН»</Author>
        </AdditionalInformation>
      </Block>
    </Section>
  </Container>
);

export default AboutMe;

const Container = styled.section`
  background-color: #efefef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  @media (max-width: 1480px) {
    padding-bottom: 30px;
  }
`;
const Section = styled.div`
  display: flex;
  gap: 5%;
  width: 80%;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Block = styled.div`
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BlockImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  min-height: 50vh;
  transform: rotate(-3deg);
  @media (max-width: 1440px) {
    width: 100%;
    height: 600px;
    transform: rotate(0deg);
    margin-bottom: 65px;
  }
  @media (max-width: 820px) {
    width: 80%;
    height: 515px;
  }
  @media (max-width: 520px) {
    width: 100%;
    height: 515px;
  }
`;

const Img = styled.div`
  background-image: url(${aboutMe});
  width: 330px;
  height: 420px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 22px;
  @media (max-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;

const TitleImg = styled.p`
  font-size: 30px;
  color: rgb(44, 73, 77);
  font-weight: 400;
  text-align: center;
`;

const BlockDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 10%;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-bottom: 60px;
  }
`;

const Item = styled.p`
  font-size: 19px;
  font-family: "Rubik", sans-serif;
  color: rgb(44, 73, 77);
  font-weight: 600;
  background-color: #ddb0cf;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  border-radius: 15px;
  color: #fff;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

const ItemWhite = styled.p`
  font-size: 19px;
  font-family: "Rubik", sans-serif;
  color: rgb(44, 73, 77);
  font-weight: 600;
  background-color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  border-radius: 15px;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  width: 100%;
  @media (max-width: 820px) {
  }
`;

const AdditionalInformation = styled.div``;

const DescriptionAdditional = styled.p`
  color: rgb(44, 73, 77);
  font-family: cursive;
  margin-bottom: 20px;
  @media (max-width: 1480px) {
    text-align: center;
  }
  @media (max-width: 636px) {
    font-size: 17px;
  }
`;

const Author = styled.h3`
  color: rgb(44, 73, 77);
  font-family: cursive;
  text-align: center;
  @media (max-width: 745px) {
    font-size: 20px;
  }
  @media (max-width: 636px) {
    font-size: 17px;
  }
`;
