import { InputFiltrStyled, LabelFiltrStyled } from './InputFiltr.styled';
import PropTypes from 'prop-types';

export default function InputFiltr({ value, onChange }) {
  return (
    <LabelFiltrStyled>
      Filtr contacts by name:
      <InputFiltrStyled
        type="text"
        value={value}
        onChange={onChange}
        placeholder="enter name"
      />
    </LabelFiltrStyled>
  );
}

InputFiltr.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
