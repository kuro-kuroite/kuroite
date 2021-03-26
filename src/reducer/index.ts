import { combineReducers } from '@reduxjs/toolkit';

import { langReducer } from './lang/langSlice';
import { themeReducer } from './theme/themeSlice';

export const rootReducer = combineReducers({
  lang: langReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
