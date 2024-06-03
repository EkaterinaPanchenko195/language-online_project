import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchTeamForm } from "../redux/slice/submitTeamForm";

const ApplicationForTeam = () => {
  const dispatch = useDispatch()<any>;

  const sendForm = (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    e.target.reset();
    const data = { form: "team", ...Object.fromEntries(form) };

    dispatch(fetchTeamForm(data));
  };

  return (
    <Container>
      <BlockTitle>
        <Description>ЯЗЫКОВОЙ ЦЕНТР "ЛАНГУАГЕ ОНЛАЙН"</Description>
        <Title>Заявка в команду</Title>
      </BlockTitle>
      <Form onSubmit={sendForm}>
        <Input
          type="text"
          name="name"
          required
          placeholder="Как к тебе обращаться?"
        ></Input>
        <Input
          type="text"
          name="media"
          required
          placeholder="Социальная сеть для связи и никнейм"
        ></Input>
        <Input
          type="email"
          name="email"
          required
          placeholder="youremail@domain.com"
        ></Input>
        <Input
          required
          type="tel"
          name="tel"
          placeholder="+1 123 456 7890"
        ></Input>
        <Textarea name="comment" placeholder="Комментарий"></Textarea>
        <Button type="submit">Отправить</Button>
      </Form>
    </Container>
  );
};

export default ApplicationForTeam;

const Container = styled.section`
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #ddb0cf;
  padding: 100px 0;
  color: #fff;
  min-height: 20vh;
  margin-bottom: 90px;
`;

const Description = styled.h3`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  font-weight: 500;
  @media (max-width: 530px) {
    font-size: 35px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
  padding: 50px;
  width: 50%;
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 85%;
  border: none;
  border-bottom: 1px solid #385b60;
  padding-bottom: 20px;
  margin-bottom: 45px;
  outline: none;
  color: #2d4a4e;
  @media (max-width: 530px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  color: #2c494d;
  width: 85%;
  height: 150px;
  overflow: hidden;
  outline: none;
  resize: none;
  margin-bottom: 90px;
  border: none;
  border-bottom: 1px solid #385b60;
  @media (max-width: 530px) {
    width: 100%;
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
