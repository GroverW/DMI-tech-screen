/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import setThemeProviderReducer from 'containers/SetThemeProvider/reducer';
import stringsReducer from 'containers/AddNewString/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    theme: setThemeProviderReducer,
    strings: stringsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
