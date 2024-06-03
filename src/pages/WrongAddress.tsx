import styled from "styled-components";

const WrongAddress = () => (
  <Container>
    <Title>Something went wrong...</Title>
  </Container>
);

export default WrongAddress;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const Title = styled.div`
  font-family: "Rubik", sans-serif;
  color: #2c494d;
  font-size: 56px;
  font-weight: 700;
  line-height: 80px;
  margin: 0;
  margin-bottom: 40px;
`;
