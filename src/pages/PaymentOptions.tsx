import styled from "styled-components";
import ComponentButton from "../components/ComponentButton";
import imgPayment from "../images/payment.jpg";

const PaymentOptions = () => (
  <Container>
    <Payment>
      <Block>
        <Title>Оплачивай обучение из любой страны!</Title>
        <Description>
          К оплате принимаются пластиковые карты VISA, MasterCard и МИР. Приём
          оплат осуществляется при помощи системы "Продамус.Платежи", поэтому
          валюта расчёта – российские рубли и тенге.
        </Description>
        <LinkNav href="https://language-online.payform.ru/">
          <ComponentButton textButton="Перейти к оплате" />
        </LinkNav>
      </Block>
      <Block>
        <BlockImg></BlockImg>
      </Block>
    </Payment>
  </Container>
);

export default PaymentOptions;

const Container = styled.section`
  background-color: #efefef;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const LinkNav = styled.a`
  cursor: pointer;
  font-weight: 600;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: rgb(44, 73, 77);
  &:hover {
    color: #ddb0cf;
  }
`;

const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  gap: 5%;
  @media (max-width: 1130px) {
    justify-content: center;
    flex-direction: column-reverse;
    width: 70%;
  }
`;

const Block = styled.div`
  @media (max-width: 1130px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 35px;
  margin-bottom: 33px;
  line-height: 55px;
  color: rgb(37, 62, 65);
  @media (max-width: 1130px) {
    text-align: center;
  }
  @media (max-width: 540px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

const Description = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: rgb(37, 62, 65);
  margin-bottom: 33px;
  @media (max-width: 540px) {
    font-size: 15px;
  }
`;

const BlockImg = styled.div`
  background-image: url(${imgPayment});
  width: 445px;
  height: 445px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 35px 44px 54px -21px rgba(221, 176, 207, 0.75);
  @media (max-width: 1130px) {
    margin-bottom: 33px;
    width: 300px;
    height: 300px;
  }
`;
