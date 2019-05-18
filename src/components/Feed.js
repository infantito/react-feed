import React, { memo } from 'react';
import styled from 'styled-components'

import Button from './Button';
import Post from './Post';

const ContentPost = styled.div`
  padding: 5px 0;
`;

const Feed = (props) => {
  const posts = props.posts || [];
  const handleDelete = (e) => {
    console.log(e);
  }

  return (
    <div>
      {
        posts.map((post) => (
          <ContentPost>
            <Post>{posts.description}</Post>
            <Button type="button" onClick={handleDelete}>
              Delete
            </Button>
          </ContentPost>
        ))
      }
    </div>
  );
}

export default memo(Feed);
