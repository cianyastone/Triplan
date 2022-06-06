import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadTrip, readTrip, readOthersTrip } from "../api/firebase";

const uploadTripAsync = createAsyncThunk(
  "trip/uploadTrip",
  async ({ name, days, date, image }) => {
    const { data } = await uploadTrip({ name, days, date, image });
    return data;
  }
);

const readTripAsync = createAsyncThunk("trip/readTrip", async () => {
  const data = await readTrip();
  return data;
});

const readOthersTripAsync = createAsyncThunk(
  "trip/readOthersTrip",
  async () => {
    const data = await readOthersTrip();
    return data;
  }
);

const initialState = {
  data: {},
  othersData: {},
  status: "idle",
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(uploadTripAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadTripAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(readTripAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readTripAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(readOthersTripAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readOthersTripAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.othersData = action.payload;
      });
  },
});

export const selectData = (state) => state.trip.data;
export const selectOthersData = (state) => state.trip.othersData;
export const selectStatus = (state) => state.trip.status;

export { uploadTripAsync, readTripAsync, readOthersTripAsync };

export default tripSlice.reducer;
