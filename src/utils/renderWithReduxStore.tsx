import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { rootReducer, RootState } from '../reducer';

export const renderWithReduxStore: (
  ui: ReactElement
) => { store: EnhancedStore<RootState> } & RenderResult = (ui) => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return { store, ...render(<Provider store={store}>{ui}</Provider>) };
};
