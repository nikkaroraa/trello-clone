import React, { Component } from 'react';

import Column from './components/Column';
import data from './data';

class App extends Component {
  state = data;

  render() {
    const { tasks, columns, columnOrder } = this.state;
    return columnOrder.map(columnID => {
      const column = columns[columnID];

      const columnTasks = column.taskIds.map(taskID => tasks[taskID]);

      return <Column key={column.id} column={column} tasks={columnTasks} />;
    });
  }
}

export default App;
