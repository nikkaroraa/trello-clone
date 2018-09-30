import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

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
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

class Column extends Component {
  render() {
    const {
      column: { title, id },
      tasks
    } = this.props;
    return (
      <Container>
        <Title>{title}</Title>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
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
