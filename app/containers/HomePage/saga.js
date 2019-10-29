import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_FORM } from 'containers/App/constants';
import { submitSuccess, submitError } from 'containers/App/actions';

import request from 'utils/request';

export function* submitForm({ form }) {
  const requestURL = 'https://union.sg/api/campaign/submit';

  try {
    const opt = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: form,
    };
    const res = yield call(request, requestURL, opt);
    if (res) {
      yield put(submitSuccess());
    } else {
      yield put(submitError('Failed submit the Form'));
    }
  } catch (err) {
    // real case will dispatch error
    // yield put(submitError(err));
    yield put(submitSuccess());
  }
}

export default function* saga() {
  yield takeLatest(SUBMIT_FORM, submitForm);
}
