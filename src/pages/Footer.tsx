import styled from "styled-components";
import telegram from "../images/tel.png";
import instagram from "../images/inst.png";
import tiktok from "../images/tikt.png";
import logo from "../images/logo-white.svg";

const Footer = () => (
  <Container>
    <Block>
      <Logo />
      <Rights>
        <Description>
          © All Rights Reserved. Founder Milana Litvinka
        </Description>
        <Description>
          Авторское право на Иконки от Freepik принадлежит - Flaticon
        </Description>
      </Rights>
      <BlockMedia>
        <a href="https://www.instagram.com/milana_litvinko/">
          <Instagram />
        </a>
        <a href="https://t.me/languageonlinecenter">
          <Telegram />
        </a>
        <a href="https://www.tiktok.com/@language_online">
          <Tiktok />
        </a>
      </BlockMedia>
    </Block>
    <Author>
      Developed by Panchenko Ekaterina - panchenkoekaterina195@gmail.com
    </Author>
  </Container>
);

export default Footer;

const Container = styled.footer`
  height: 19vh;
  background-color: #2c494d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  text-align: center;
  color: #fff;
  @media (max-width: 1120px) {
    padding: 160px 0;
  }
`;

const Block = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1120px) {
    flex-direction: column;
    row-gap: 25px;
    margin-bottom: 19px;
  }
`;

const Logo = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 183px;
  height: 115px;
  background-image: url(${logo});
  @media (max-width: 440px) {
    width: 125px;
    height: 80px;
  }
`;

const Rights = styled.div``;

const Description = styled.p`
  @media (max-width: 440px) {
    font-size: 11px;
  }
`;

const BlockMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Tiktok = styled.div`
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  background-image: url(${tiktok});
  cursor: pointer;
`;

const Instagram = styled.div`
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  background-image: url(${instagram});
  cursor: pointer;
`;

const Telegram = styled.div`
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  background-image: url(${telegram});
  cursor: pointer;
`;

const Author = styled.p`
  font-size: 12px;
  @media (max-width: 440px) {
    width: 80%;
  }
`;
