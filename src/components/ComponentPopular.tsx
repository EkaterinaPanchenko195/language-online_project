import styled from "styled-components";

const ComponentPopular = () => <Block>Popular</Block>;

export default ComponentPopular;

const Block = styled.h2`
  background-color: rgba(146, 224, 217, 0.5);
  position: absolute;
  top: -10px;
  right: -21px;
  transform: rotate(30deg);
  padding: 10px;
  border-radius: 50px;
  font-family: "Rubik", sans-serif;
  /* background-color: aliceblue; */
  color: #2d4a4e;
  @media (max-width: 1295px) {
    font-size: 22px;
  }
`;
