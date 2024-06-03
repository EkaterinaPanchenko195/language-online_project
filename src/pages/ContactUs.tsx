import styled from "styled-components";
import ComponentButton from "../components/ComponentButton";
import { useDispatch } from "react-redux";
import { fetchContactUsForm } from "../redux/slice/submitContactUsForm";

const ContactUs = () => {
  const dispatch = useDispatch()<any>;

  const sendForm = (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    e.target.reset();
    const data = { form: "contactUs", ...Object.fromEntries(form) };

    dispatch(fetchContactUsForm(data));
  };

  return (
    <Container>
      <Title>Как связаться с нами</Title>
      <Description>
        Оставь свои данные в форме ниже и мы с тобой свяжемся
      </Description>
      <Form onSubmit={sendForm}>
        <Input required type="email" name="email" placeholder="E-mail"></Input>
        <Input required type="text" name="name" placeholder="ФИО"></Input>
        <Textarea placeholder="Комментарий" name="comment"></Textarea>
        <ComponentButton textButton="Отправить" />
        <ButtonDescription>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c политикой конфиденциальности
        </ButtonDescription>
      </Form>
    </Container>
  );
};

export default ContactUs;

const Container = styled.section`
  background-color: #ebebeb;
  height: fit-content;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  background-color: #2c494d;
  width: fit-content;
  padding: 15px;
  font-size: 60px;
  border-radius: 75px;
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;
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

const Description = styled.h2`
  color: #2c494d;
  margin-bottom: 40px;
  font-size: 22px;
  @media (max-width: 925px) {
    font-size: 16px;
  }
  @media (max-width: 570px) {
    font-size: 14px;
    width: 60%;
    text-align: center;
  }
`;
const Form = styled.form`
  width: 30%;
  font-family: "Rubik", sans-serif;
  color: #2c494d;
  text-align: center;
  @media (max-width: 1285px) {
    width: 50%;
  }
  @media (max-width: 740px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: -29px 24px 54px -21px rgba(221, 176, 207, 0.75);
  border: none;
  margin-bottom: 20px;
  outline: none;
  color: #2c494d;
`;

const Textarea = styled.textarea`
  color: #2c494d;
  width: 100%;
  height: 150px;
  border: none;
  padding: 20px;
  overflow: hidden;
  outline: none;
  resize: none;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: -29px 24px 54px -21px rgba(221, 176, 207, 0.75);
`;

const ButtonDescription = styled.p`
  margin-top: 20px;
  font-size: 16px;
  @media (max-width: 925px) {
    font-size: 12px;
  }
`;
