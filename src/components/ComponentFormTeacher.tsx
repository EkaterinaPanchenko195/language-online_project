import styled from "styled-components";
import { TComponentFormProps } from "../types/types";
import { useDispatch } from "react-redux";
import { fetchTeacherForm } from "../redux/slice/submitTeacherForm";

const ComponentFormTeacher = ({
  title,
  description,
  teacher,
  teacherId,
}: TComponentFormProps) => {
  const dispatch = useDispatch()<any>;

  const sendForm = (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    e.target.reset();
    const data = { form: "teacher", teacherId, ...Object.fromEntries(form) };

    dispatch(fetchTeacherForm(data));
  };

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Form onSubmit={sendForm}>
          <Input
            type="text"
            name="name"
            required
            placeholder="Как к тебе обращаться?"
          ></Input>
          <Input
            required
            type="tel"
            name="tel"
            placeholder="Номер телефона"
          ></Input>
          <Input
            type="text"
            name="media"
            required
            placeholder="Никнейм или ссылка на телеграм, если твой профиль скрыт"
          ></Input>
          <DescriptionInst>
            *проект Meta Platforms Inc., деятельность которой в России запрещена
          </DescriptionInst>
          <Input
            type="text"
            name="nickname"
            placeholder="Никнейм в Instagram* "
          ></Input>
          <Input required type="email" name="email" placeholder="Почта"></Input>

          <LabelStart>
            {" "}
            Какой формат занятий тебе интересен?
            <Block>
              {" "}
              <Radio
                name="format"
                type="radio"
                value="Индивидуальные"
              ></Radio>{" "}
              <Label>Индивидуальные</Label>
            </Block>
            <Block>
              {" "}
              <Radio name="format" type="radio" value="Групповые"></Radio>{" "}
              <Label>Групповые</Label>
            </Block>
            <Block>
              {" "}
              <Radio
                name="format"
                type="radio"
                value="Разговорные клубы"
              ></Radio>{" "}
              <Label>Разговорные клубы</Label>
            </Block>
          </LabelStart>

          <LabelStart>
            {" "}
            Как оцениваешь свой уровень?
            <Block>
              {" "}
              <Radio name="level" type="radio" value="A1-A2"></Radio>{" "}
              <Label>начинающий (A1-A2)</Label>
            </Block>
            <Block>
              {" "}
              <Radio name="level" type="radio" value="B1-B1+"></Radio>{" "}
              <Label>средний (B1-B1+)</Label>
            </Block>
            <Block>
              {" "}
              <Radio name="level" type="radio" value="B2"></Radio>{" "}
              <Label>уверенный (B2)</Label>
            </Block>
            <Block>
              {" "}
              <Radio name="level" type="radio" value="C1"></Radio>{" "}
              <Label>продвинутый (C1)</Label>
            </Block>
          </LabelStart>
          <Input
            type="text"
            placeholder="В какие дни и время тебе удобно заниматься? Сколько раз в неделю?"
            name="daysClasses"
          ></Input>
          <Teacher>Твой будущий преподаватель – {teacher}</Teacher>
          <Button type="submit">Записаться</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ComponentFormTeacher;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  padding-bottom: 50px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  border: 10px solid #ddb0cf;
  color: #2d4a4e;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  @media (max-width: 1320px) {
    width: 70%;
  }
  @media (max-width: 530px) {
    width: 95%;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 55px;
  text-align: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 75px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d6d6d6;
  width: 85%;
  padding-bottom: 20px;
  margin-bottom: 45px;
  outline: none;
  color: #2d4a4e;
  @media (max-width: 1000px) {
    font-size: 12px;
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 21px;
  line-height: 46px;
  width: 85%;
  margin-bottom: 45px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const LabelStart = styled.label`
  font-size: 21px;
  line-height: 46px;
  width: 85%;
  margin-bottom: 45px;
  text-align: start;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Radio = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
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

const Block = styled.div``;

const DescriptionInst = styled.p`
  font-size: 13px;
  margin-bottom: 25px;
  color: #b1b1b1;
`;

const Teacher = styled.label`
  font-size: 20px;
  margin-bottom: 45px;
  text-align: center;
`;
