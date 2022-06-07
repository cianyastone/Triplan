import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  uploadTrip,
  readTrip,
  readOthersTrip,
  deleteTrip,
  collectTrip,
  deleteCollect,
  readCollect,
} from "../api/firebase";

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

const deleteTripAsync = createAsyncThunk(
  "trip/deleteTripAsync",
  async ({ name, user }) => {
    await deleteTrip({ name, user });
  }
);

const collectTripAsync = createAsyncThunk(
  "trip/collectTripAsync",
  async ({ name, user }) => {
    const data = await collectTrip({ name, user });
    return data;
  }
);
const deleteCollectAsync = createAsyncThunk(
  "trip/deleteCollectAsync",
  async ({ name, user }) => {
    const data = await deleteCollect({ name, user });
    return data;
  }
);
const readCollectAsync = createAsyncThunk(
  "trip/readCollectAsync",
  async () => {
    const data = await readCollect();
    return data;
  }
);

const initialState = {
  data: {},
  othersData: {},
  collectData: [],
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
      })
      .addCase(deleteTripAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTripAsync.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(collectTripAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(collectTripAsync.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deleteCollectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCollectAsync.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(readCollectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(readCollectAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.collectData = action.payload;
      });
  },
});

export const selectData = (state) => state.trip.data;
export const selectOthersData = (state) => state.trip.othersData;
export const selectCollectData = (state) => state.trip.collectData;
export const selectStatus = (state) => state.trip.status;

export {
  uploadTripAsync,
  readTripAsync,
  readOthersTripAsync,
  deleteTripAsync,
  collectTripAsync,
  deleteCollectAsync,
  readCollectAsync,
};

export default tripSlice.reducer;
