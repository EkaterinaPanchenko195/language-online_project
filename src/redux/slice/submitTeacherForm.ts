import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeacherForm: any = createAsyncThunk(
  "teacherForm/fetchTeacherForm",
  async (formMainData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://language-online-crm.com:18920/0/ServiceModel/LoTildaWebhookService.svc/CreateLead",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            lead: {
              ...(formMainData as any),
              sendingMessages: true,
            },
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("что-то пошло не так");
      }
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const submitTeacherForm = createSlice({
  name: "submitTeacherFormData",
  initialState: {
    data: {},
    error: null,
    message: null,
    response: null,
    status: 0,
    success: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchTeacherForm.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        fetchTeacherForm.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      ),
      builder.addCase(
        fetchTeacherForm.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      )
    );
  },
});

const { actions, reducer } = submitTeacherForm;
export const {} = actions;
export default reducer;
