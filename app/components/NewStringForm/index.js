/**
 *
 * NewStringForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import InputRow from './InputRow';
import TextInput from './TextInput';
import Button from './Button';
import messages from './messages';

const INITIAL_STATE = {
  stringText: '',
};

function NewStringForm(props) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;

    setFormData(oldData => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.addString(formData.stringText);
  };

  return (
    <form>
      <InputRow>
        <TextInput
          type="text"
          name="stringText"
          theme={props.theme}
          value={formData.stringText}
          onChange={handleChange}
        />
        <Button theme={props.theme} type="submit" onClick={handleSubmit}>
          <FormattedMessage {...messages.addButton} />
        </Button>
      </InputRow>
    </form>
  );
}

NewStringForm.propTypes = {
  theme: PropTypes.object,
  addString: PropTypes.func,
};

export default NewStringForm;
