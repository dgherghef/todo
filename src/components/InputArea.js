import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };
function InputArea({ addNewItem }) {
  const [nameItem, setNameItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(nameItem);
    console.log(nameItem);
    setNameItem('');
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Input
        style={{
          zIndex: 100,
          color: 'white',
          marginRight: '15px',
          fontFamily: 'Indie Flower',
          marginBottom: '20px',
        }}
        placeholder='Task'
        inputProps={ariaLabel}
        value={nameItem}
        onChange={(e) => setNameItem(e.target.value)}
      />
      <Button
        style={{
          zIndex: 100,
          borderRadius: '20px',
          fontFamily: 'Boba Milky',
        }}
        onClick={handleSubmit}
        variant='contained'
      >
        Add
      </Button>
    </div>
  );
}

export default InputArea;
