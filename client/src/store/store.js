import { configureStore } from "@reduxjs/toolkit";
import currentQuestionReducer from "./currentQuestion";
import mockDataReducer from "./mockData";
const store = configureStore({
  reducer: {
    currentQuestion: currentQuestionReducer,
    mock: mockDataReducer,

  },
});

export default store;
