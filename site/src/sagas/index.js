import { spawn } from "redux-saga/effects";

import redirects from "./redirects";

export default function* () {
    yield spawn(redirects);
}
  