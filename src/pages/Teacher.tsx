import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IRootState } from "../redux/store";
import { useEffect, useMemo } from "react";
import { fetchOurTeamData } from "../redux/slice/ourTeam";
import { useParams } from "react-router-dom";
import ComponentFormTeacher from "../components/ComponentFormTeacher";

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

const Teacher = () => {
  const dispatch = useDispatch()<any>;

  const { TeacherId } = useParams<string>();

  const data = useSelector(
    (state: IRootState) => state.defoltOurTeamData.data
  ) as any[];

  const teacher = useMemo(
    () => data.find((item) => item.TeacherId === TeacherId),
    [data, TeacherId]
  );

  useEffect(() => {
    dispatch(fetchOurTeamData()); // вызываем вместо actions/reduser  функцию с асинхроном
  }, []);

  return (
    <Container>
      {teacher && (
        <Main>
          <Block>
            <Title>{teacher.Name}</Title>
            {teacher.Photo && (
              <Img photo={toDataURL(teacher.Photo, "image/jpeg")} />
            )}
          </Block>
          <BlockText>
            <BlockDescription>
              <DescriptionTitle>О преподавателе:</DescriptionTitle>
              <Description>{teacher.AboutTeacher}</Description>
              <Description />
            </BlockDescription>
            <BlockDescription>
              <DescriptionTitle>Преподаёт:</DescriptionTitle>
              <Description>{teacher.Teaches}</Description>
              <Description />
            </BlockDescription>
          </BlockText>
        </Main>
      )}
      <ComponentFormTeacher
        title="Пробное занятие БЕСПЛАТНО"
        description="Оставь свои данные для записи на занятия"
        teacher={teacher?.Name}
        teacherId={TeacherId}
      />
    </Container>
  );
};

export default Teacher;

const Container = styled.section`
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #264044;
  flex-direction: column;
`;

const Main = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5%;
  margin-bottom: 100px;
  @media (max-width: 1470px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 780px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 1470px) {
    text-align: center;
  }
`;

const Img = styled.div<{ photo: string }>`
  ${({ photo }) => `
  background-image: url(${photo});
`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 360px;
  height: 540px;
  @media (max-width: 1470px) {
    width: 600px;
  }
  @media (max-width: 780px) {
    width: 319px;
  }
`;

const BlockDescription = styled.div``;

const Block = styled.div``;

const BlockText = styled.div`
  padding-top: 70px;
  @media (max-width: 1470px) {
    width: 90%;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  white-space: pre-line;
  margin-bottom: 50px;
  font-size: 18px;
`;
