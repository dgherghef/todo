import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Input from '@mui/material/Input';

function TaskList(props) {
  const {
    currentElement,
    deleteElement,
    index,
    updateElement,
    destroyElement,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(currentElement);

  const handleClick = () => {
    deleteElement(index);
    console.log(index);
  };

  const handleClickEdit = () => {
    setIsEditing(true);
    console.log('edit');
  };

  const handleDelete = () => {
    destroyElement(index);
  };

  const handleClickSave = () => {
    updateElement(index, editedValue);
    console.log(currentElement);
    setIsEditing(false);
  };

  return (
    <div>
      <li style={{ marginBottom: '-7px' }}>
        <ul style={{ margin: '0px', padding: '0px' }}>
          <div
            style={{
              margin: '0px',
              padding: '0px',
              fontFamily: 'Indie Flower',
              fontSize: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0',
              }}
            >
              {isEditing ? (
                <Input
                  style={{ zIndex: 100 }}
                  type='text'
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
              ) : (
                <p
                  style={{
                    margin: '0',
                    padding: '0',
                  }}
                >
                  {currentElement}
                </p>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {isEditing ? (
                    <>
                      <IconButton onClick={handleClickSave}>
                        <DoneIcon sx={{ fontSize: '15px' }} />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton onClick={handleClickEdit}>
                        <EditIcon sx={{ fontSize: '15px' }} />
                      </IconButton>
                      <IconButton onClick={handleClick}>
                        <CheckCircleIcon sx={{ fontSize: '15px' }} />
                      </IconButton>
                      <IconButton onClick={handleDelete}>
                        <DeleteForeverIcon sx={{ fontSize: '15px' }} />
                      </IconButton>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </div>
  );
}

export default TaskList;
