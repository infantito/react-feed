import styled from 'styled-components';

const Post = styled.div`
  background-color: #273e5a;
  border: 2px solid ${props => props.theme.submit};
  border-radius: 5px;
  color: ${props => props.theme.text};
  cursor: not-allowed;
  display: block;
  height: 80px;
  margin: 0 auto;
  padding: 5px 10px;
  width: ${props => props.width || '100%'};
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Post;
