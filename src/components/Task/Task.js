import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

class Task extends Component {
  render() {
    const {
      task: { content, id },
      index
    } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {content}
          </Container>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    content: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Task;
