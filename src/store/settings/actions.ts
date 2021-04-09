import {CHANGE_THEME, ThemeDispatch} from './types';

export const changeTheme = (theme: string) => async (
  dispatch: ThemeDispatch,
) => {
  await dispatch({type: CHANGE_THEME, theme});
};
