import { StyledContainer } from './Container.styled';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
