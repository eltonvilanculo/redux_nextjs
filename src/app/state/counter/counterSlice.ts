import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  status?: string;
}

const initialState: CounterState = {
  value: 1,
  status: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    descrement: (state) => {
      state.value -= 1;
    },
    incrementbyStep: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
          state.status = "";
        }
      )
      .addCase(incrementAsync.pending, (state) => {
        state.status = "Loading";
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve, reject) => setInterval(resolve, 1000));

    return amount;
  }
);

export const { increment, descrement, incrementbyStep } = counterSlice.actions;

export default counterSlice.reducer;
