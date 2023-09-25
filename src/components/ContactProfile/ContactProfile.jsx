import { StyledContact } from './ContactProfile.styled';
import { Button } from 'components/Button';
import PropTypes from 'prop-types';

export default function ContactProfile({ id, name, number, handleDelete }) {
  return (
    <StyledContact>
      {name}: {number}
      <Button
        type="button"
        handler={() => handleDelete(id)}
        colorchange="red"
        marginchange="10px"
      >
        Delete
      </Button>
    </StyledContact>
  );
}

ContactProfile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
