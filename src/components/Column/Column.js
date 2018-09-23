import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Task from '../Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-redius: 2px;
`;

const Title = styled.div`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

class Column extends Component {
  render() {
    const {
      column: { title },
      tasks
    } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        <TaskList>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </TaskList>
      </Container>
    );
  }
}

Column.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Column;
