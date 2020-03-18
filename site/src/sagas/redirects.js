import { put, spawn, takeEvery } from "redux-saga/effects"
import { push} from "connected-react-router"

import {
    REDIR_HOME
  } from "../constants/actions";

function* redirectToHome() {
    yield put(push("/"));
}

export default function* handleRedirects() {
    yield spawn(takeEvery, REDIR_HOME, redirectToHome);
}