import '../App.css';
import * as React from 'react';
import TaskList from './TaskList';
import { Typography } from '@mui/material';

function TodoList(props) {
  const { allItems, deleteElement, deleteTask, updateElement, destroyElement } =
    props;
  console.log(allItems);

  return (
    <div>
      <div id='paper1'>
        <div id='pattern'>
          <div id='content'>
            <Typography id='title-lists'>To do</Typography>
            {allItems.map((element, index) =>
              element !== 0 ? (
                <TaskList
                  key={index}
                  index={index}
                  currentElement={element}
                  deleteElement={deleteElement}
                  deleteTask={deleteTask}
                  updateElement={updateElement}
                  destroyElement={destroyElement}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
