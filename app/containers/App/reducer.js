/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM, SUBMIT_FORM_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  success: false,
  message: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SUBMIT_FORM:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        draft.message = null;
        break;

      case SUBMIT_FORM_SUCCESS:
        draft.loading = false;
        draft.success = true;
        break;

      case SUBMIT_FORM_ERROR:
        draft.loading = false;
        draft.error = true;
        draft.message = action.message;
        break;
    }
  });

export default appReducer;
