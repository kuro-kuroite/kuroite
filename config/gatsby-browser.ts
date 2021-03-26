import { GatsbyBrowser } from 'gatsby';

import { wrapWithProviderGatsbyBrowser } from '../src/utils/wrapWithProvider';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = wrapWithProviderGatsbyBrowser;
