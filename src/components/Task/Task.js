import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

class Task extends Component {
  render() {
    const {
      task: { content }
    } = this.props;
    return <Container>{content}</Container>;
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    content: PropTypes.string
  }).isRequired
};

export default Task;
