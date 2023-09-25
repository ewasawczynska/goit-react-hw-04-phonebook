import { ContactProfile } from 'components/ContactProfile';
import PropTypes from 'prop-types';

export default function Contacts({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactProfile
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
