import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mockSlice = createSlice({
  name: "mock",
  initialState,
  reducers: {
    setMock(state, action) {
      return {...state, ...action.payload };
    },
    setStatus(state, action) {
      return action.payload;
    },
    setOptionChosen(state,action){
      return action.payload;
    }
  },
});

export const { setMock, setOptionChosen, setStatus} = mockSlice.actions;
export default mockSlice.reducer;
