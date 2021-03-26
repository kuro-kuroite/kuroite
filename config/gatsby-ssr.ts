import { GatsbySSR } from 'gatsby';

import { wrapWithProviderGatsbySsr } from '../src/utils/wrapWithProvider';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = wrapWithProviderGatsbySsr;
