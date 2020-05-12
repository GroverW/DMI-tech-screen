/*
 * AddNewString Messages
 *
 * This contains all the text for the AddNewString container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AddNewString';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add a New String',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage:
      'Fill out the input below and click "Add String" to create a brand new String!',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Successfully added String!',
  },
});
