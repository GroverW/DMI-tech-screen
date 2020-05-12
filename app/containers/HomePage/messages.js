/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to String Central',
  },
  subHeading: {
    id: `${scope}.subHeading`,
    defaultMessage: `Home to the internet's latest Strings`,
  },
  viewAllText: {
    id: `${scope}.viewAllText`,
    defaultMessage: 'View All Strings',
  },
  addNewText: {
    id: `${scope}.addNewText`,
    defaultMessage: 'Add New String',
  },
});
