import { call, put, takeEvery } from "redux-saga/effects";
import { getScoresSuccess } from "../Slice/ScoreSlice";

function* workGetScoresFetch() {
  const score = yield call(() => fetch("https://fakestoreapi.com/users"));
  const formattedScores = yield score.json();

  yield put(getScoresSuccess(formattedScores));
}

function* scoresSaga() {
  yield takeEvery("score/getScoresFetch", workGetScoresFetch);
}

export default scoresSaga;
