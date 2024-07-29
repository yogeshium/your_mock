import { createSlice } from "@reduxjs/toolkit";

const initialState = { sectionNumber: 1, questionNumber: 1 };

const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    increment(state, action) {
      // console.log("hii");
      const { totalCurrSectionQuestions, totalSections } = action.payload;
      // console.log(totalCurrSectionQuestions,totalSections);
      if (state.questionNumber + 1 <= totalCurrSectionQuestions)
        state.questionNumber += 1;
      else if (state.sectionNumber + 1 <= totalSections) {
        state.questionNumber = 1;
        state.sectionNumber += 1;
      } else {
        state.sectionNumber = 1;
        state.questionNumber = 1;
      }
    },

    decrement(state, action) {
      const { totalPrevSectionQuestions, totalSections } = action.payload;
      if (state.questionNumber - 1 >= 1) state.questionNumber -= 1;
      else if (state.sectionNumber - 1 >= 1) {
        state.questionNumber = totalPrevSectionQuestions;
        state.sectionNumber -= 1;
      } else {
        state.sectionNumber = totalSections;
        state.questionNumber = totalPrevSectionQuestions;
      }
    },

    setSectionQuestion(state, action) {
      return { ...action.payload };
    },
  },
});

export const { increment, decrement, setSectionQuestion } =
  currentQuestionSlice.actions;

export default currentQuestionSlice.reducer;
