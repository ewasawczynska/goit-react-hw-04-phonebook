import { StyledSection, Title, Content } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <StyledSection>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
