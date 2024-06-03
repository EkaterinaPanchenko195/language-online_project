import styled from "styled-components";
import ComponentChooseUs from "../components/ComponentChooseUs";
import ComponentButton from "../components/ComponentButton";
import people from "../images/free-animated-icon-c.gif";
import lamp from "../images/free-animated-icon-i.gif";
import stars from "../images/free-animated-icon-m (1).gif";
import table from "../images/free-animated-icon-w.gif";
import rocket from "../images/free-animated-icon-r.gif";
import hand from "../images/free-animated-icon-m.gif";
import { Link } from "react-router-dom";

const ChooseUs = () => (
  <Container>
    <Title>Почему выбирают нас ?</Title>
    <Block>
      <BlockLeft>
        <BlockBackground>
          <Img src="https://optim.tildacdn.biz/tild3061-3930-4030-a639-353135363036/-/cover/622x622/left/top/-/format/webp/noroot.png"></Img>
        </BlockBackground>
      </BlockLeft>
      <div>
        <BlockDescription>
          <ComponentChooseUs
            img={lamp}
            title="Авторские материалы"
            description="никаких шаблонных уроков по школьным учебникам. Материалы для каждого занятия разрабатываются методистами индивидуально под твои интересы и цели."
          />
          <ComponentChooseUs
            img={stars}
            title="Гибкость"
            description="ты сам выбираешь преподавателя, расписание и регулярность занятий. Мы обучаем даже рано утром или поздно ночью"
          />
          <ComponentChooseUs
            img={hand}
            title="Интерактивная платформа"
            description="где все обучающие материалы в одном месте, а выполнение упражнений превращается в увлекательную игру"
          />
          <ComponentChooseUs
            img={people}
            title="Прокачиваем soft skills"
            description="обучаем не только английскому языку, но и уверенной, эффективной коммуникации"
          />
          <ComponentChooseUs
            img={rocket}
            title="Обучаем кросс-культурной коммуникации"
            description="чтобы ты чувствовал себя «своим» в путешествиях или в работе с иностранными партнёрами."
          />
          <ComponentChooseUs
            img={table}
            title="Полное погружение в английский"
            description="активности и бонусы для студентов школы для большего прогресса и удовольствия в процессе обучения"
          />
        </BlockDescription>
        <BlockButton>
          <Link to={"/trial-session"}>
            <ComponentButton textButton="Записаться на пробное занятие" />
          </Link>
        </BlockButton>
      </div>
    </Block>
  </Container>
);

export default ChooseUs;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 10px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  background-color: #2c494d;
  width: fit-content;
  padding: 15px;
  font-size: 70px;
  border-radius: 75px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  margin-bottom: 120px;
  transform: rotate(3deg);
  text-align: center;

  @media (max-width: 930px) {
    font-size: 45px;
    margin-bottom: 65px;
  }
  @media (max-width: 570px) {
    font-size: 36px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    width: 80%;
  }
`;

const Block = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  @media (max-width: 1420px) {
    flex-direction: column-reverse;
    width: 45%;
    align-items: center;
  }
  @media (max-width: 1040px) {
    width: 80%;
  }
`;

const BlockBackground = styled.div`
  margin-right: 5%;
  padding-right: 35px;
  padding-bottom: 15px;
  background-color: #ddb0cf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  @media (max-width: 1420px) {
    margin-top: 30px;
    padding-right: 63px;
    padding-bottom: 0px;
    width: fit-content;
  }
  @media (max-width: 1100px) {
    padding-right: 0;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  @media (max-width: 505px) {
    width: 300px;
    height: 300px;
  }
`;

const BlockDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  align-items: flex-start;
  margin-bottom: 65px;
  width: fit-content;
  @media (max-width: 1420px) {
    display: grid;
    grid-template-columns: repeat(2, 100%);
    margin-bottom: 65px;
    justify-content: center;
    row-gap: 5%;
    column-gap: 10%;
    align-items: flex-start;
  }
  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
  }
  @media (max-width: 1005px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
  }
`;

const BlockButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlockLeft = styled.div``;
