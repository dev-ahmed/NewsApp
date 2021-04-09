import {Reducer} from 'redux';
import {ThemeActions, CHANGE_THEME, SettingsState} from './types';

const initialState = {
  theme: 'light',
  language: 'en',
};

export const settingsReducer: Reducer<SettingsState, ThemeActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};
