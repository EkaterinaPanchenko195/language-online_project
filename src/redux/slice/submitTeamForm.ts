import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeamForm: any = createAsyncThunk(
  // получаем api
  "teamForm/fetchTeamForm",
  async (formMainData, { rejectWithValue }) => {
    try {
      // попытаться сделать, то, что находится внутри try иначе catch
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

const submitTeamForm = createSlice({
  name: "submitTeamFormData",
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
      builder.addCase(fetchTeamForm.pending, (state: any) => {
        // pending - в ожидании
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        fetchTeamForm.fulfilled,
        // fulfilled - выполнено
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      ),
      builder.addCase(
        fetchTeamForm.rejected,
        // rejected -  отклоненный
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      )
    );
  },
});

const { actions, reducer } = submitTeamForm;
export const {} = actions;
export default reducer;
