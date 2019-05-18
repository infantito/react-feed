import React, { memo } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Button from './Button';
import Post from './Post';

const Audience = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0;
`;

const ALL_POSTS_BY_USER_QUERY = gql`
  query ALL_POSTS_BY_USER_QUERY($userId: ID!) {
    posts(userId: $userId) {
      id
      description
      createdAt
    }
  }
`;

const Feed = (props) => {
  const handleDelete = (e) => {
    console.log(e);
  }

  return (
    <div>
      <Query
        query={ALL_POSTS_BY_USER_QUERY}
        variables={{
          userId: 1,
        }}
      >
        {
          ({ data: { posts }, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;

            return (
              posts.map((post) => (
                <Audience key={post.id}>
                  <Post width="75%">{post.description}</Post>
                  <Button
                    type="button"
                    width="125px"
                    onClick={handleDelete}
                    auto
                  >
                    Delete
                  </Button>
                </Audience>
              ))
            );
          }
        }
      </Query>
    </div>
  );
}

export default memo(Feed);
