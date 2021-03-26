import { configureStore } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { rootReducer } from '../reducer';

export const ReduxStoreProvider: FC = ({ children }) => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return <Provider store={store}>{children}</Provider>;
};
