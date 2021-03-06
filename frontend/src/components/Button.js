import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.submit};
  border: 2px solid ${props => props.theme.submit};
  border-radius: 5px;
  color: ${props => props.theme.text};
  cursor: pointer;
  height: 40px;
  outline: none;
  margin: 5px ${props => props.auto ? 'auto' : 0};
  width: ${props => props.width || '100%'};
  &:active {
    border-color: ${props => props.theme.black};
  }
  &:hover {
    border-color: ${props => props.theme.border};
  }
`;

export default Button;
