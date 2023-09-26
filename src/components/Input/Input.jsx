import { React, useState } from 'react';
import { ErrorMessage, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

export default function Input({ type, name, pattern, title, required, value }) {
  const [state, setState] = useState('');

  const handleChange = (e, onChange) => {
    setState(e.target.value);
    if (onChange) {
      onChange({
        inputName: name,
        inputValue: e.target.value,
      });
    }
  };

  const checkInputValid = () => {
    const pattern = this.props.pattern;
    const regExp = new RegExp(pattern);
    return regExp.test(state);
  };

  const valid = state === '' || checkInputValid;
  const inputClassName = state !== '' ? (valid ? 'valid' : 'invalid') : '';

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
        value={state}
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
