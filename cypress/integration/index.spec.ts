import { getByTestId } from '../support/getByTestId';

describe('/index/', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  specify(
    'ロードした時に，dark modeとlight modeのアクセシビリティを確認する',
    () => {
      // HACK: checkA11yの前に任意のテストを実行し，DOMを描画
      cy.get('main').should('have.length', 1);

      getByTestId('darkModeCheckbox').click({ force: true });
      cy.checkA11y();

      getByTestId('darkModeCheckbox').click({ force: true });
      cy.checkA11y();
    }
  );

  afterEach(() => {
    cy.document().its('body').toMatchSnapshot();
  });
});
