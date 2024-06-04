import styled from "styled-components";
import ComponentPrice from "../components/ComponentPrice";
import ComponentTitle from "../components/ComponentTitle";
import ComponentButton from "../components/ComponentButton";
import ComponentPopular from "../components/ComponentPopular";
import { Link } from "react-router-dom";

const Price = () => (
  <Container>
    <ComponentTitle text={"Форматы обучения"} />;
    <BlockPrice>
      <BlockBackground>
        <ComponentPrice
          text={
            "Индивидуальные занятия по подготовке к собеседованию или работе в IT"
          }
          priceText={"2500₽"}
          description="IT & Business English, IELTS prep"
        ></ComponentPrice>
        <Link to={"/privatepremium"}>
          <ComponentButton textButton={"записаться"}></ComponentButton>
        </Link>
      </BlockBackground>

      <BlockBackground>
        <ComponentPrice
          text={"IT-English курс"}
          priceText={"1750₽"}
          description="длительность 5 месяца, занятия в группе до 6 человек"
        ></ComponentPrice>
        <a href="https://docs.google.com/forms/d/1RyKS3AFXNV661iF6EKVrmBEIeD2L___UV5cM7GIKY5U/viewform?fbclid=PAAaY9d8xP278gAFZfeLLx8-8I90q3vBB34bAEJ2vNTjMhSxDXPyJN_qL_pKs_aem_AYe8GMc8NL24vVqK7GILRkVWs6PEjxRQyd_n8RQo0dknpldswWG1W1AH2KehxeNtUU8&edit_requested=true">
          <ComponentButton textButton={"записаться"}></ComponentButton>
        </a>
        <ComponentPopular />
      </BlockBackground>

      <BlockBackground>
        <ComponentPrice
          text={"Мини-группы (2-6 человек)"}
          priceText={"1000₽"}
          description={"для комплексной работы над уровнем"}
        ></ComponentPrice>
        <Link to={"/groupform"}>
          <ComponentButton textButton={"записаться"}></ComponentButton>
        </Link>
      </BlockBackground>

      <BlockBackground>
        <ComponentPrice
          text={"Разговорные клубы (2-6 человек)"}
          priceText={"800₽"}
          description={"для поддержания уровня владения и разговорной практики"}
        ></ComponentPrice>
        <Link to={"/clubform"}>
          <ComponentButton textButton={"записаться"}></ComponentButton>
        </Link>
      </BlockBackground>

      <BlockBackground>
        <ComponentPrice
          text={"Индивидуальные занятия"}
          priceText={"1500₽"}
          description={"для комплексной работы над уровнем"}
        ></ComponentPrice>
        <Link to={"/privatestandart"}>
          <ComponentButton textButton={"записаться"}></ComponentButton>
        </Link>
      </BlockBackground>
    </BlockPrice>
  </Container>
);

export default Price;

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  margin-bottom: 100px;
`;

const BlockPrice = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  gap: 3%;
  row-gap: 65px;
  @media (max-width: 1140px) {
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const BlockBackground = styled.div`
  width: 30%;
  background-color: #efefef;
  height: 300px;
  border-radius: 55px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:hover {
    box-shadow: -29px 24px 54px -21px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 1140px) {
    width: 70%;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;
