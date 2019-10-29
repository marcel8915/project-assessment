/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectRequest = () =>
  createSelector(
    selectGlobal,
    globalState => ({
      loading: globalState.loading,
      error: globalState.error,
      success: globalState.success,
      message: globalState.message,
    }),
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { selectGlobal, makeSelectRequest, makeSelectLocation };
