import React, { PureComponent } from 'react';
import styled from 'styled-components'

import Button from './Button';

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

class Composer extends PureComponent {
  static defaultProps = {
    maxLength: 200,
    placeholder: 'What\'s on your mind?',
  };

  state = {
    description: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
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
          <Button
            type="submit"
            onClick={self.handleSubmit}
          >
            Send comment
          </Button>
        </div>
      </form>
    );
  }
}

export default Composer;
