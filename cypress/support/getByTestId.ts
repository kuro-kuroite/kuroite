// INFO: refer to commands.js
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAllByTestId = (testId: string) => {
  return cy.get(`[data-testid=${testId}]`);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getByTestId = (testId: string) => {
  return getAllByTestId(testId);
};
