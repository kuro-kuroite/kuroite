import { DecoratorFn } from '@storybook/react';
import React from 'react';

import { wrapWithProvider } from '../../../src/utils/wrapWithProvider';

export const withReduxProvider: DecoratorFn = (Story, context) => {
  return (
    <>
      {wrapWithProvider({
        element: (
          <>
            <Story {...context} />
          </>
        ),
      })}
    </>
  );
};
