import styled from "styled-components";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";
import ComponentButton from "../components/ComponentButton";
import { TComponentdefoltOurTeamDataProps } from "../types/types";
import { Link } from "react-router-dom";
import ourTeacher from "../images/ourTeacher.png";

export const toDataURL = (img: ArrayBuffer, contentType: string) => {
  const image = btoa(
    new Uint8Array(img).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return `data:${contentType};base64,${image}`;
};

export const convertUnicode = (input: string) =>
  input.replace(/\\+u([0-9a-fA-F]{4})/g, (a, b) =>
    String.fromCharCode(parseInt(b, 16))
  );

const OurTeam = () => {
  const data = useSelector(
    (state: IRootState) => state.defoltOurTeamData.data
  ) as any;

  return (
    <Container>
      <ContainerTitle>Наша команда</ContainerTitle>
      <Wrapper>
        {data?.map(
          ({
            Description,
            Name,
            Photo,
            TeacherId,
          }: TComponentdefoltOurTeamDataProps) => (
            <Block key={TeacherId}>
              {Photo && <BlockImg photo={toDataURL(Photo, "image/jpeg")} />}
              <Title>{Name}</Title>
              <Specification>{Description}</Specification>
              <Link to={`/page/${TeacherId}`}>
                <ComponentButton textButton="Подробнее" />
              </Link>
            </Block>
          )
        )}
        <Block>
          <Img />
          <Title>Наш будущий препод</Title>
          <Link to={"/forTeachers"}>
            <ComponentButton textButton="Подробнее" />
          </Link>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default OurTeam;

const Container = styled.section`
  margin: 120px auto;
  font-family: "Rubik", sans-serif;
  color: #2c494d;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 420px) {
    margin: 50px auto;
  }
`;

const ContainerTitle = styled.h2`
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 60px;
  width: 80%;
`;

const Block = styled.div`
  width: 360px;
`;

const BlockImg = styled.div<{ photo: string }>`
  ${({ photo }) => `
  background-image: url(${photo});
`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 350px;
  height: 460px;
  margin-bottom: 20px;
  border-radius: 25px;
  @media (max-width: 420px) {
    width: 300px;
    height: 460px;
  }
`;

const Img = styled.div`
  background-image: url(${ourTeacher});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 350px;
  height: 460px;
  margin-bottom: 20px;
  border-radius: 25px;
  @media (max-width: 420px) {
    width: 300px;
    height: 460px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Specification = styled.p`
  white-space: pre-line;
  margin-bottom: 20px;
  font-size: 14px;
`;
