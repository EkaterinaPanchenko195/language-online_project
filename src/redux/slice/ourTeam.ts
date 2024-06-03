import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOurTeamData = createAsyncThunk(
  "OurTeamData/fetchOurTeamData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://language-online-crm.com:18920/0/ServiceModel/LoTildaWebhookService.svc/GetTeacherList",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({}),
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

const defoltOurTeamData = createSlice({
  name: "OurTeamData",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchOurTeamData.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        fetchOurTeamData.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload.GetTeacherListResult;
        }
      ),
      builder.addCase(
        fetchOurTeamData.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      )
    );
  },
});

const { actions, reducer } = defoltOurTeamData;
export const {} = actions;
export default reducer;
