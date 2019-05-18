import styled from 'styled-components';

const Post = styled.div`
  background-color: ${props => props.theme.submit};
  border: 2px solid ${props => props.theme.submit};
  border-radius: 5px;
  color: ${props => props.theme.text};
  height: 40px;
  width: 100%;
`;

export default Post;
