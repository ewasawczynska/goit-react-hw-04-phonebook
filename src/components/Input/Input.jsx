import React from 'react';
import { ErrorMessage, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Input({ type, name, pattern, title, required, onChange }) {
  const [valueI, setValueI] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setValueI(inputValue);
    if (onChange) {
      onChange({ inputName: name, inputValue: inputValue });
    }
  };

  const checkInputValid = () => {
    const regExp = new RegExp(pattern);
    return regExp.test(valueI);
  };

  const valid = valueI === '' || checkInputValid();
  const inputClassName = valueI !== '' ? (valid ? 'valid' : 'invalid') : '';
  return (
    <div>
      <StyledInput
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        onChange={handleChange}
        className={inputClassName}
        value={valueI}
      />
      {!valid ? <ErrorMessage>{title}</ErrorMessage> : null}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
