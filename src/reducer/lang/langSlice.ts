import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const langSlice = createSlice({
  initialState: 'ja' as LangType,
  name: 'lang',
  reducers: {
    setLang(_, action: PayloadAction<LangType>) {
      return action.payload;
    },
  },
});

export type LangType = 'ja' | 'en';

export const { setLang } = langSlice.actions;

export const langReducer = langSlice.reducer;
