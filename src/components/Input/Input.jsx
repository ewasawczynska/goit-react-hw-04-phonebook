import React, { useState } from 'react';
import { ErrorMessage, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

export const Input = ({
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
}) => {
  const [valueInpt, setValueInpt] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setValueInpt(inputValue);
    onChange({
      inputName: name,
      inputValue: inputValue,
    });
  };

  const checkInputValid = () => {
    const regExp = new RegExp(pattern);
    return regExp.test(valueInpt);
  };

  const valid = value === '' || checkInputValid;
  const inputClassName = value !== '' ? (valid ? 'valid' : 'invalid') : '';

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
        value={value}
      />
      {!valid ? <ErrorMessage>{title}</ErrorMessage> : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
