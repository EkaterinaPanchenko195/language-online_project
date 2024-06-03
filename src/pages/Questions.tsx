import styled from "styled-components";
import { useCallback, useState } from "react";
import plus from "../images/free-icon-plus-339895.png";

const Questions = () => {
  const defaultQuestions = [
    {
      id: 0,
      question: "Кто вы такие? Почему студенты выбирают вас?",
      answer: (
        <BlockDescription>
          <Description>
            ЛАНГУАГЕ ОНЛАЙН – это команда преподавателей английского с уровнем
            владения С1-С2. Мы уже не раз подтверждали свою компетенцию на
            занятиях со студентами, выступлениях перед широкой публикой и на
            международных экзаменах.
          </Description>
          <TitleList>Наши ценности:</TitleList>
          <List>
            <Item>✎ объяснить сложное – просто и доступно;</Item>
            <Item>✎ улётная атмосфера на занятиях;</Item>
            <Item>✎ актуальные материалы и живой английский;</Item>
            <Item>
              ✎ персонализированные уроки: мы составляем программу обучения,
              учитывая интересы, цели и пожелания каждого студента
            </Item>
          </List>
        </BlockDescription>
      ),
      isSelected: false,
    },
    {
      id: 1,
      question: "Для чего нужно пробное занятие и как оно проходит?",
      answer: (
        <BlockDescription>
          <Description>
            Пробное занятие – это онлайн-встреча с преподавателем на 20-30
            минут, где вы знакомитесь, определяете уровень владения английским,
            обсуждаете цели и пожелания по дальнейшему обучению. Первая встреча
            даёт возможность понять, насколько вам вместе будет комфортно
            работать над достижением твоей цели, а также настроиться на
            плодотворную учёбу.
          </Description>
        </BlockDescription>
      ),
      isSelected: false,
    },
    {
      id: 2,
      question: "Чем отличаются групповые занятия от разговорных клубов?",
      answer: (
        <BlockDescription>
          <Description>
            На <strong>разговорный клуб</strong> выбирается тема, может быть
            абсолютно любой – от обсуждения домашних питомцев до
            философствований о прокрастинации, от игровых дискуссий до дебатов.
            Преподаватель готовит для группы лексику, вопросы и активности по
            теме, чтобы клуб прошёл интересно и весело.
            <Description>
              Цель <strong>разговорных клубов</strong> – максимум разговорной
              практики, выведение пассивного словарного запаса в активный,
              избавление от языкового барьера. Благодаря участию разных людей,
              это ещё и возможность практики слушания и восприятия на слух
              разных акцентов. В конце клуба даётся фидбек по наиболее частым
              грамматическим ошибкам и рекомендации по использованию лексики.
            </Description>
            <Description>
              На <strong>групповых занятиях</strong> делается упор на
              восполнение грамматических пробелов, изучение новых тем и их
              детальную отработку во всех языковых компетенциях (listening,
              reading, writing, speaking) – то есть это комплексная работа над
              повышением уровня.
            </Description>
          </Description>
        </BlockDescription>
      ),
      isSelected: false,
    },
    {
      id: 3,
      question: "Как проходят занятия?",
      answer: (
        <BlockDescription>
          <Description>
            Все занятия проводятся онлайн на интерактивной платформе. Программа
            и материалы для занятий разрабатываются под интересы, цели и
            предпочтения каждого студента. Наши преподы используют современные и
            эффективные методики по внедрению грамматики/лексики в речь,
            пониманию смысла и беглости речи. На занятиях вы можете обсуждать
            видео и статьи, песни и новости – что угодно, что будет
            способствовать прогрессу и получению удовольствия в процессе
            обучения.
          </Description>
        </BlockDescription>
      ),
      isSelected: false,
    },
    {
      id: 4,
      question: "Вы обучаете преподавателей?",
      answer: (
        <BlockDescription>
          <Description>
            Да, мы работаем со студентами высоких уровней! Если хочешь подтянуть
            свой английский или готовишься подтвердить уровень на международном
            экзамене – <strong>оставляй заявку на обучение.</strong>
          </Description>
        </BlockDescription>
      ),
      isSelected: false,
    },
    {
      id: 5,
      question: "Вы преподаёте только английский?",
      answer: (
        <BlockDescription>
          <Description>
            Пока да, но мы стремительно растём и хотим помочь большему
            количеству людей освоить иностранные языки. Напиши нам в окошке
            обратной связи внизу главной страницы сайта и укажи язык, который
            хотелось бы изучать в нашем языковом центре! Мы найдём твоего
            преподавателя!
          </Description>
        </BlockDescription>
      ),
      isSelected: false,
    },
  ];

  const [questions, setQuestions] = useState(defaultQuestions);

  const setSelectedQuestion = useCallback(
    (id: number) => {
      const updatedQuestions = questions.map((question) =>
        question.id === id
          ? {
              ...question,
              isSelected: !question.isSelected,
            }
          : question
      );

      setQuestions(updatedQuestions);
    },
    [questions, setQuestions]
  );

  return (
    <Container>
      <TitleContainer>Остались вопросы?</TitleContainer>
      <Accordion>
        {questions.map(({ id, question, answer, isSelected }) => (
          <BlockAccordion key={id} onClick={() => setSelectedQuestion(id)}>
            <Block>
              <Title>{question}</Title>
              <Button src={plus}></Button>
            </Block>
            {isSelected && answer}
          </BlockAccordion>
        ))}
      </Accordion>
    </Container>
  );
};

export default Questions;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
  color: rgb(44, 73, 77);
  margin-bottom: 80px;
`;

const TitleContainer = styled.h2`
  background-color: #2c494d;
  width: fit-content;
  padding: 25px;
  font-size: 75px;
  border-radius: 75px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  margin-bottom: 120px;
  transform: rotate(3deg);

  @media (max-width: 900px) {
    font-size: 45px;
    margin-bottom: 65px;
  }
  @media (max-width: 475px) {
    font-size: 25px;
    width: 80%;
  }
`;

const Accordion = styled.div`
  width: 60%;
  @media (max-width: 1300px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-right: 35px;
  @media (max-width: 1300px) {
    font-size: 24px;
    margin-right: 28px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const BlockAccordion = styled.div`
  cursor: pointer;
  background-color: #ebebeb;
  border-radius: 50px;
  padding: 35px;
  margin-bottom: 5px;
  @media (max-width: 1300px) {
    padding: 22px;
  }
`;

const Button = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const BlockDescription = styled.div`
  cursor: default;
  font-size: 18px;
  font-weight: 100;
`;

const Description = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Rubik", sans-serif;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleList = styled.h2`
  margin-bottom: 15px;
  @media (max-width: 1300px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li``;
