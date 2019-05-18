import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

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
      self.setState({ description: '' });
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
      <form>
        <div>
          <TextArea
            value={state.description}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={self.handleChange}
          />
          <Mutation
            mutation={CREATE_POST_MUTATION}
            variables={{
              description: state.description,
              userId: 1,
            }}
          >
            {
              (createPost, { loading }) => (
                <Button
                  type="submit"
                  disabled={loading}
                  onClick={self.handleSubmit(createPost)}
                >
                  Send{loading && 'ing'} comment
                </Button>
              )
            }
          </Mutation>
        </div>
      </form>
    );
  }
}

export default Composer;
