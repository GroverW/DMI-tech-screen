/*
 * AllStrings Messages
 *
 * This contains all the text for the AllStrings container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AllStrings';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Latest Strings',
  },
  loadMore: {
    id: `${scope}.loadMore`,
    defaultMessage: 'Load More',
  },
  complete: {
    id: `${scope}.complete`,
    defaultMessage: `That's it! No more Strings.`,
  },
});
