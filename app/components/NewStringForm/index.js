/**
 *
 * NewStringForm
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const INITIAL_STATE = {
  stringText: '',
};

function NewStringForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData(oldData => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form>
      <input
        type="text"
        name="stringText"
        value={formData.stringText}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        <FormattedMessage {...messages.addButton} />
      </button>
    </form>
  );
}

NewStringForm.propTypes = {};

export default NewStringForm;
