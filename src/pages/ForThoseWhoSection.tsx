import styled from "styled-components";

const ForThoseWhoSection = () => (
  <Container>
    <Title>Для тех, кто:</Title>
    <List>
      <Item>Хочет войти в IT и успешно пройти собеседование</Item>
      <Item>Хочет преодолеть языковой барьер</Item>
      <Item>Готовится к международным экзаменам по английскому</Item>
      <Item>Готовится к переезду или путешествиям</Item>
    </List>
  </Container>
);

export default ForThoseWhoSection;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 10px;
  padding-top: 80px;
`;

const Title = styled.h2`
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

  /* transform: rotate(4deg); */
  @media (max-width: 900px) {
    font-size: 45px;
    margin-bottom: 65px;
  }
  @media (max-width: 420px) {
    font-size: 25px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  counter-reset: num;
  position: relative;
  margin: 0 0 0 60px;
  padding: 15px 20px 0px 40px;
  font-size: 35px;
  font-family: "Rubik", sans-serif;
  &:before {
    content: "";
    position: absolute;
    top: 18px;
    bottom: 18px;
    left: -47px;
    width: 1px;
    border-left: 10px solid #2c494d;
    height: 78%;
    margin-left: 40px;
  }
`;

const Item = styled.li`
  position: relative;
  margin: 0 0 0 0;
  padding: 0 0 115px 0;
  line-height: 1.4;

  &:after {
    content: "";
    counter-increment: num;
    display: inline-block;
    position: absolute;
    top: 0;
    left: -75px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    color: #2c494d;
    text-align: center;
    font-size: 35px;
    border-radius: 50%;
    border-left: 7px solid #2c494d;
    border-right: 7px solid #2c494d;
    border-bottom: 3px solid #2c494d;
    border-top: 3px solid;
  }
  @media (max-width: 820px) {
    font-size: 30px;
  }
  @media (max-width: 430px) {
    font-size: 17px;
  }
`;
