import React, { useEffect } from "react";
import Header from "./pages/Header";
import styled from "styled-components";
import MainSection from "./pages/MainSection";
import { Route, Routes } from "react-router-dom";
import WrongAddress from "./pages/WrongAddress";
import ForThoseWhoSection from "./pages/ForThoseWhoSection";
import AboutMe from "./pages/AboutMe";
import Price from "./pages/Price";
import ChooseUs from "./pages/ChooseUs";
import PaymentOptions from "./pages/PaymentOptions";
import OurTeam from "./pages/OurTeam";
import Questions from "./pages/Questions";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
import ForTeachers from "./pages/ForTeachers";
import ComponentForm from "./components/ComponentForm";
import ApplicationForTeam from "./pages/ApplicationForTeam";
import Teacher from "./pages/Teacher";
import { fetchOurTeamData } from "./redux/slice/ourTeam";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()<any>;

  useEffect(() => {
    dispatch(fetchOurTeamData());
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="*" element={<WrongAddress />}></Route>
          <Route
            index
            path="/"
            element={
              <>
                <MainSection />
                <ForThoseWhoSection />
                <AboutMe />
                <Price></Price>
                <ChooseUs />
                <PaymentOptions />
                <OurTeam />
                <Questions />
                <ContactUs />
              </>
            }
          />
          <Route path="/faq" element={<Questions />} />
          <Route path="/forTeachers" element={<ForTeachers />} />
          <Route
            path="/privatestandart"
            element={
              <ComponentForm
                title="Записаться на индивидуальные занятия"
                description="Заполни все поля, пожалуйста, чтобы мы точно смогли тебя найти и поскорее начать обучение"
              />
            }
          />
          <Route
            path="/privatepremium"
            element={
              <ComponentForm
                title="Записаться на индивидуальные занятия"
                description="Заполни все поля, пожалуйста, чтобы мы точно смогли тебя найти и поскорее начать обучение"
              />
            }
          />
          <Route
            path="/groupform"
            element={
              <ComponentForm
                title="Запись на групповые занятия"
                description="Заполни все поля, пожалуйста, чтобы мы точно смогли тебя найти и поскорее начать обучение"
              />
            }
          />
          <Route
            path="/clubform"
            element={
              <ComponentForm
                title="Запись в разговорный клуб"
                description="Заполни все поля, пожалуйста, чтобы мы точно смогли тебя найти и поскорее начать обучение"
              />
            }
          />
          <Route
            path="/trial-session"
            element={
              <ComponentForm
                title="Записаться на бесплатное пробное занятие"
                description="Заполни все поля, пожалуйста, чтобы мы точно смогли тебя найти и поскорее начать обучение"
              />
            }
          />

          <Route path="/applicationForTeam" element={<ApplicationForTeam />} />
          <Route path="/page/:TeacherId" element={<Teacher />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;

const Main = styled.div``;
