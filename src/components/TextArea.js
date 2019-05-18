import styled from 'styled-components';

const TextArea = styled.textarea`
  background-color: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  color: #fff;
  display: block;
  height: 150px;
  margin: 0 auto;
  padding: 10px;
  outline: none;
  overflow: auto;
  resize: none;
  width: 100%;
  &:focus {
    border-color: ${props => props.theme.blue};
  }
`;

export default TextArea;
