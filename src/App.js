import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './components/Column';
import data from './data';

class App extends Component {
  state = data;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { columns } = this.state;
    if (destination === null) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = columns[source.droppableId];

    // to prevent mutation of the existing taskIds
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...columns,
        [newColumn.id]: newColumn
      }
    };

    this.setState(newState);
  };

  render() {
    const { tasks, columns, columnOrder } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {columnOrder.map(columnID => {
          const column = columns[columnID];

          const columnTasks = column.taskIds.map(taskID => tasks[taskID]);

          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
