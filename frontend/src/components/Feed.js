import React, { memo } from 'react';
import { Query, Mutation } from 'react-apollo';
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

const DELETE_POST_MUTATION = gql`
  mutation DELETE_POST_MUTATION($id: ID!, $userId: ID!) {
    deletePost(id: $id, userId: $userId)
  }
`;

const Feed = (props) => {
  const handleDelete = (removePost) => (e) => {
    removePost();
    alert('This comment will be deleted!');
  }
  const userId = 1;

  return (
    <div>
      <Query
        query={ALL_POSTS_BY_USER_QUERY}
        variables={{ userId, }}
      >
        {
          ({ data: { posts }, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;

            return (
              posts.reverse().map((post) => (
                <Audience key={post.id}>
                  <Post width="75%">{post.description}</Post>
                  <Mutation
                    mutation={DELETE_POST_MUTATION}
                    variables={{ id: post.id, userId, }}
                    refetchQueries={[{
                      query: ALL_POSTS_BY_USER_QUERY,
                      variables: { userId, }
                    }]}
                  >
                    {
                      (deletePost, { loading }) => (
                        <Button
                          type="button"
                          width="125px"
                          onClick={handleDelete(deletePost)}
                          auto
                        >
                          Delete
                        </Button>
                      )
                    }
                  </Mutation>
                </Audience>
              ))
            );
          }
        }
      </Query>
    </div>
  );
}

export { ALL_POSTS_BY_USER_QUERY };
export default memo(Feed);
