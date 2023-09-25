import { React, useState } from 'react';
import { ErrorMessage, StyledInput } from './Input.styled';
import PropTypes from 'prop-types';

export default function Input() {
  const [state, setState] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setState(inputValue);
    if (this.props.onChange) {
      this.props.onChange({
        inputName: this.props.name,
        inputValue: inputValue,
      });
    }
  };

  const checkInputValid = () => {
    const pattern = this.props.pattern;
    const regExp = new RegExp(pattern);
    return regExp.test(state);
  };

  const { type, name, pattern, title, required, value } = this.props;
  const valid = value === '' || checkInputValid();
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
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
