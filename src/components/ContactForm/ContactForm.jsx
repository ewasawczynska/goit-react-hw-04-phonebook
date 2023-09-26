import { StyledForm } from './ContactForm.styled';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = ({ inputName, inputValue }) => {
    this.setState({ [inputName]: inputValue });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handler({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChange}
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
            value={number}
            onChange={this.onChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  handler: PropTypes.func.isRequired,
};
