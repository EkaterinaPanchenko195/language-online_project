import { configureStore } from "@reduxjs/toolkit";
import defoltOurTeamDataReducer from "./slice/ourTeam";
import submitMainFormReducer from "./slice/submitMainForm";
import submitTeacherFormReducer from "./slice/submitTeacherForm";
import submitContactUsFormReducer from "./slice/submitContactUsForm";
import submitTeamFormReducer from "./slice/submitTeamForm";

const rootReducer = {
  defoltOurTeamData: defoltOurTeamDataReducer,
  submitMainForm: submitMainFormReducer,
  submitTeacherForm: submitTeacherFormReducer,
  submitContactUsForm: submitContactUsFormReducer,
  submitTeamForm: submitTeamFormReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
