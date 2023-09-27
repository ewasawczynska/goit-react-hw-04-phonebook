import { StyledForm } from './ContactForm.styled';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContactForm = ({ handler }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const onChange = ({ inputName, inputValue }) => {
    setFormData(prev => ({ ...prev, [inputName]: inputValue }));
  };

  const onSubmit = e => {
    e.preventDefault();
    handler({
      name: formData.name,
      number: formData.number,
    });
    setFormData({ name: '', number: '' });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={onChange}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formData.number}
          onChange={onChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  handler: PropTypes.func.isRequired,
};
