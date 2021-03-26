import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  initialState: null as ThemeType,
  name: 'theme',
  reducers: {
    setTheme(_, action: PayloadAction<ThemeType>) {
      return action.payload;
    },
  },
});

// NOTE: Systemの値を表すためnullを許可
export type ThemeType = null | 'dark' | 'light';

export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
