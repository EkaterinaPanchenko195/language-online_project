import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { useState } from "react";

const Header = () => {
  const [stateBurger, setStateBurger] = useState(true);

  return (
    <Container>
      <ContainerSize>
        <BlockMenu>
          <Link to={`/`}>
            <Logo src={logo} alt="Лангуаге Онлайн - logo"></Logo>
          </Link>
          <Burger onClick={() => setStateBurger(!stateBurger)}>
            {stateBurger ? (
              <>
                <Line />
                <Line />
                <Line />
              </>
            ) : (
              <>
                <LineClose />
                <LineClose />
              </>
            )}
          </Burger>
        </BlockMenu>
        <Block>
          {stateBurger ? (
            <Navigation>
              <LinkNavigation to={`/`}>Главная</LinkNavigation>
              <LinkNavigation to={`/forTeachers`}>Преподам</LinkNavigation>
              <LinkNav href="https://language-online.payform.ru/">
                Оплата
              </LinkNav>
              <LinkNavigation to={`/faq`}>FAQ</LinkNavigation>
            </Navigation>
          ) : (
            <Navigation style={{ display: "flex" }}>
              <LinkNavigation to={`/`}>Главная</LinkNavigation>
              <LinkNavigation to={`/forTeachers`}>Преподам</LinkNavigation>
              <LinkNav href="https://language-online.payform.ru/">
                Оплата
              </LinkNav>
              <LinkNavigation to={`/faq`}>FAQ</LinkNavigation>
            </Navigation>
          )}
        </Block>
      </ContainerSize>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  @media (max-width: 750px) {
    margin-bottom: 0px;
  }
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

const ContainerSize = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  padding-top: 10px;
  width: 80%;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
  }
`;
const Burger = styled.div`
  display: none;
  @media (max-width: 750px) {
    align-items: center;
    border: 2px solid;
    border-radius: 68px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50px;
    margin-top: 10px;
    padding: 5px;
    width: 50px;
  }
`;
const Line = styled.div`
  display: none;

  @media (max-width: 750px) {
    background-color: #000;
    display: block;
    height: 2px;
    width: 25px;
  }
`;

const LineClose = styled.div`
  display: none;

  @media (max-width: 750px) {
    background-color: #000;
    display: block;
    height: 2px;
    position: absolute;
    transform: rotate(45deg);
    width: 25px;
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

const BlockMenu = styled.div`
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
  }
`;
const Block = styled.div`
  height: 100%;
`;

const Logo = styled.img`
  cursor: pointer;
  display: flex;
  height: 85px;
  width: 122px;
  margin-right: 20px;
`;
const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  height: 100%;

  @media (max-width: 750px) {
    align-items: center;
    display: none;
    flex-direction: column;
  }
`;

const LinkNavigation = styled(Link)`
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
