import styled from "styled-components";
import { TComponentFormProps } from "../types/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMainForm } from "../redux/slice/submitMainForm";

const ComponentForm = ({ title, description }: TComponentFormProps) => {
  const dispatch = useDispatch()<any>;

  const [isCheked, setIsCheked] = useState(true);

  const sendForm = (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    e.target.reset();
    const data = { form: "main", ...Object.fromEntries(form) };

    dispatch(fetchMainForm(data));
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
          <Input type="email" required name="email" placeholder="Почта"></Input>

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
            name="daysClasses"
            placeholder="В какие дни и время тебе удобно заниматься? Сколько раз в неделю?"
          ></Input>
          <Label>
            {" "}
            К какому преподавателю хочешь попасть?
            <br />
            <Select name="teacher">
              <Option>без разницы</Option>
              <Option>Милана</Option>
              <Option>Лера</Option>
              <Option>Майк</Option>
              <Option>Никита</Option>
              <Option>Оля</Option>
              <Option>Ирина</Option>
            </Select>
          </Label>
          <LabelCheked>
            <br />
            <Cheked
              type="checkbox"
              onChange={() => setIsCheked(!isCheked)}
              checked={isCheked}
              name="sendingMessages"
              value="true"
            ></Cheked>
            Согласен(а) на получение информационных сообщений
          </LabelCheked>
          <Button type="submit">Записаться</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ComponentForm;

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

const Select = styled.select`
  border: none;
  border-bottom: 1px solid #d6d6d6;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 45px;
  outline: none;
  color: #2d4a4e;
`;

const Option = styled.option``;

const Cheked = styled.input`
  width: 12px;
  height: 12px;
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

const LabelCheked = styled.label`
  font-size: 13px;
  margin-bottom: 45px;
`;
