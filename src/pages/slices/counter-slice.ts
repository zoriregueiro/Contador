import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  aumented: 0,
  deducted: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    deduct(state) {
      state.value--;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    deductValue(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    setAumented(state, action: PayloadAction<number>) {
      state.aumented = action.payload;
    },
    setDeducted(state, action: PayloadAction<number>) {
      state.deducted = action.payload;
    },
    reset: (state) => {
      state.value = initialState.value;
      state.aumented = initialState.aumented;
      state.deducted = initialState.deducted;
    },
  },
});

export const {
  incremented,
  deduct,
  amountAdded,
  deductValue,
  setAumented,
  setDeducted,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
