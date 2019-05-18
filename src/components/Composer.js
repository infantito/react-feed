import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import Button from './Button';
import TextArea from './TextArea';

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION($description: String!, $userId: ID!) {
    createPost(description: $description, userId: $userId) {
      id
      description
    }
  }
`;

const Fieldset = styled.fieldset`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
`;

class Composer extends PureComponent {
  static defaultProps = {
    maxLength: 200,
    placeholder: 'What\'s on your mind?',
  };

  state = {
    description: '',
  };

  handleSubmit = (createPost) => (e) => {
    e.preventDefault();
    const self = this;

    if (self.state.description.length) {
      createPost();
      self.setState({ description: '' }, () => {
        alert('Comment posted');
      });
    }
  }

  handleChange = (e) => {
    const self = this;
    const { target: { value } } = e;

    self.setState({ description: value });
  }

  render() {
    const self = this;
    const { props, state } = self;

    return (
      <Mutation
        mutation={CREATE_POST_MUTATION}
        variables={{
          description: state.description,
          userId: 1,
        }}
      >
        {
          (createPost, { loading }) => (
            <form
              onSubmit={self.handleSubmit(createPost)}
            >
              <Fieldset disabled={loading}>
                <TextArea
                  value={state.description}
                  maxLength={props.maxLength}
                  placeholder={props.placeholder}
                  onChange={self.handleChange}
                />
                  <Button type="submit" disabled={loading}>
                    Send{loading && 'ing'} comment
                  </Button>
              </Fieldset>
            </form>
          )
        }
      </Mutation>
    );
  }
}

export default Composer;
