import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import { PureProps, PureTagIconList } from './TagIconList';

describe('<PureTagIconList />', () => {
  describe('with tags', () => {
    test('tagsのサイズと、liの数は一致する', () => {
      let tags: PureProps['tags'] = ['React', 'TypeScript'];
      render(<PureTagIconList tags={tags} title="title" />);

      expect(screen.getAllByRole('listitem')).toHaveLength(2);

      cleanup();

      tags = ['Gatsby', 'React', 'TypeScript'];
      render(<PureTagIconList tags={tags} title="title" />);

      expect(screen.getAllByRole('listitem')).toHaveLength(3);
    });
  });
});
