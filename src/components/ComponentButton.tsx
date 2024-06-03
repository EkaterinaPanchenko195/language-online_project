import styled from "styled-components";
import { TComponentButtonProps } from "../types/types";

const ComponentButton = ({ textButton }: TComponentButtonProps) => (
  <Button type="submit">{textButton}</Button>
);

export default ComponentButton;

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
