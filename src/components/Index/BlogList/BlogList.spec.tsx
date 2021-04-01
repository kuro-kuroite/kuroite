import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { PureBlogList, PureProps } from './BlogList';
import styles from './BlogList.module.css';

describe('<PureBlogList />', () => {
  describe('with blogs', () => {
    test('blogsのサイズと、liの数は一致する', () => {
      {
        const blogs: PureProps['blogs'] = [
          {
            createdAt: '08/22/2020',
            description: 'description',
            slug: '/react-typescript',
            tags: ['React', 'TypeScript'],
            title: 'React TypeScript',
            updatedAt: '08/24/2020',
          },
          {
            createdAt: '08/25/2020',
            description: 'description',
            slug: '/react-gatsby',
            tags: ['React', 'Gatsby'],
            title: 'React Gatsby',
            updatedAt: '08/28/2020',
          },
        ];
        const { container } = render(<PureBlogList blogs={blogs} />);

        expect(container.getElementsByClassName(styles.Item)).toHaveLength(2);
      }

      cleanup();

      {
        const blogs = [
          {
            createdAt: '08/22/2020',
            description: 'description',
            slug: '/gatsby-typescript/',
            tags: ['Gatsby', 'TypeScript'],
            title: 'Gatsby TypeScript',
            updatedAt: '08/24/2020',
          },
          {
            createdAt: '08/22/2020',
            description: 'description',
            slug: '/react-typescript/',
            tags: ['React', 'TypeScript'],
            title: 'React TypeScript',
            updatedAt: '08/24/2020',
          },
          {
            createdAt: '08/25/2020',
            description: 'description',
            slug: '/react-gatsby/',
            tags: ['React', 'Gatsby'],
            title: 'React Gatsby',
            updatedAt: '08/28/2020',
          },
        ];
        const { container } = render(<PureBlogList blogs={blogs} />);

        expect(container.getElementsByClassName(styles.Item)).toHaveLength(3);
      }
    });
  });
});
