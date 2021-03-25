import { configureStore } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { rootReducer } from '../reducer';
import { fixtureStore } from './fixtures/store';

export const ReduxFixtureStoreProvider: FC = ({ children }) => {
  const store = configureStore({
    preloadedState: fixtureStore,
    reducer: rootReducer,
  });

  return <Provider store={store}>{children}</Provider>;
};
