import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from 'react-redux';

import { rootReducer, RootState } from '.';

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

const __store = configureStore({
  reducer: rootReducer,
});

// HACK: get AppDispatch
type AppDispatch = typeof __store.dispatch;
type TypedUseDispatchHook = () => AppDispatch;

export const useDispatch: TypedUseDispatchHook = rawUseDispatch;

export const selectLang: SelectorType<'lang'> = (state) => state.lang;

export const selectTheme: SelectorType<'theme'> = (state) => state.theme;

// END OF SELECT ('hygen reducer add' uses this line)

type SelectorType<K extends keyof RootState> = (
  state: RootState
) => RootState[K];
