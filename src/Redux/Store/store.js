import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import ScoresReducer from "../Slice/ScoreSlice";
import scoresSaga from "../Saga/index";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    score: ScoresReducer,
  },
  middleware: () => [saga],
});

saga.run(scoresSaga);
