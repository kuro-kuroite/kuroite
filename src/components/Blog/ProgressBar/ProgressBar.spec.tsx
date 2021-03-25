import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { PureProgressBar } from './ProgressBar';
import styles from './ProgressBar.module.css';

describe('<PureProgressBar />', () => {
  afterEach(() => {
    cleanup();
  });

  // NOTE: scroll eventを 発生するやり方が分からないため
  describe('with progress', () => {
    test('progressが0以下のとき、.Backgroundがなくなる', () => {
      const { container } = render(<PureProgressBar progress={0} />);

      expect(container.getElementsByClassName(styles.Background)).toHaveLength(
        0
      );
    });

    test('progressが0より大きいとき、.Backgroundになる', () => {
      const { container } = render(<PureProgressBar progress={0.1} />);

      expect(container.getElementsByClassName(styles.Background)).toHaveLength(
        1
      );
    });

    test('progressの値と、widthの値は一致する', () => {
      {
        const { container } = render(<PureProgressBar progress={0} />);

        expect(
          container.getElementsByClassName(styles.ProgressBar).item(0)
        ).toHaveAttribute('style', 'width: 0%;');
      }

      cleanup();

      {
        const { container } = render(<PureProgressBar progress={50} />);

        expect(
          container.getElementsByClassName(styles.ProgressBar).item(0)
        ).toHaveAttribute('style', 'width: 50%;');
      }

      cleanup();

      {
        const { container } = render(<PureProgressBar progress={100} />);

        expect(
          container.getElementsByClassName(styles.ProgressBar).item(0)
        ).toHaveAttribute('style', 'width: 100%;');
      }
    });

    test('progressが100より大きいとき、widthは100になる', () => {
      const { container } = render(<PureProgressBar progress={101} />);

      expect(
        container.getElementsByClassName(styles.ProgressBar).item(0)
      ).toHaveAttribute('style', 'width: 100%;');
    });
  });
});

describe('<ProgressBar />', () => {
  // NOTE: scroll event を発生するやり方が分からないため
  describe('with useProgress()', () => {
    test.todo('一番上までスクロールをすると、0である');

    test.todo('一番下までスクロールをすると、100である');

    test.todo('スクロールをすると、progressの値が変化する');
  });
});
