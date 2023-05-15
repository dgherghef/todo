import React, { useEffect, useState } from 'react';
import DoneList from './DoneList';
import TodoList from './TodoList';
import '../App.css';
import InputArea from './InputArea';
import { Grid } from '@material-ui/core';
import Food from './images/food.png';
import Marker from './images/marker.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography } from '@mui/material';

function Start() {
  const [allItems, setAllItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [contor, setContor] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const dataTodo = [];
    const dataDone = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key)).name;
      if (JSON.parse(localStorage.getItem(key)).category === 'todo')
        dataTodo[key] = value;
      else dataTodo[key] = 0;
      if (JSON.parse(localStorage.getItem(key)).category === 'done')
        dataDone[key] = value;
      else dataDone[key] = 0;
    }

    setAllItems(dataTodo);
    setDeletedItems(dataDone);
  }, []);

  const addElement = (currentElement) => {
    const currentItems = [...allItems];
    currentItems.push(currentElement);
    setAllItems(currentItems);
    console.log(allItems.length);
    const todoItem = {
      name: currentElement,
      category: 'todo',
    };
    localStorage.setItem(contor, JSON.stringify(todoItem));
    const newContor = contor;
    setContor(newContor + 1);
  };
  const updateElement = (id, name) => {
    //localStorage.getItem(id).name = name;
    const todoItem = {
      name: name,
      category: 'todo',
    };
    const updatedElements = [...allItems];
    updatedElements[id] = name;
    setAllItems(updatedElements);
    localStorage.setItem(id, JSON.stringify(todoItem));
  };
  const destroyElement = (id) => {
    setAllItems(allItems.filter((item, i) => i !== id));
    localStorage.removeItem(id);
  };
  const removeElement = (id) => {
    const currentDeletedItems = [...deletedItems];
    const deletedItem = allItems.find((item, i) => i === id);

    if (deletedItem) {
      currentDeletedItems[id] = deletedItem;
    }
    const todoItem = {
      name: deletedItem,
      category: 'done',
    };
    localStorage.setItem(id, JSON.stringify(todoItem));
    const removedItem = [...allItems];
    removedItem[id] = 0;
    setAllItems(removedItem);
    setDeletedItems(currentDeletedItems);
  };

  const deleteTask = (index) => {
    const updatedItems = [...allItems];
    localStorage.removeItem(index);
    updatedItems.splice(index, 1);
    setAllItems(updatedItems);
  };

  return (
    <div>
      <Typography variant='h3' id='title'>
        To-Do List
      </Typography>
      <Typography variant='h6' id='motto'>
        Procrastinate tomorrow, not today!
      </Typography>

      <InputArea addNewItem={addElement} />
      <div className='hidden-xs'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TodoList
              allItems={allItems}
              deleteElement={removeElement}
              deleteTask={deleteTask}
              updateElement={updateElement}
              destroyElement={destroyElement}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={2}
            justifyContent='center'
            alignItems='flex-end'
            gap={2}
          >
            <Grid item xs={5} className='image-pen-1'></Grid>
            <Grid item xs={6} className='image-pen-2'></Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <DoneList deletedItems={deletedItems} />
          </Grid>
        </Grid>
      </div>
      <div className='image-container'>
        <img
          data-aos='zoom-in'
          style={{
            position: 'absolute',
            width: '10%',
            top: '10%',
            right: '10%',
          }}
          src={Marker}
          alt='Marker'
        />
        <img
          data-aos='zoom-in'
          style={{
            position: 'absolute',
            width: '10%',
            bottom: '20%',
            left: '11%',
          }}
          src={Food}
          alt='Food'
        />
      </div>
    </div>
  );
}

export default Start;
