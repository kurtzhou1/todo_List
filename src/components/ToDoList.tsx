import React, { useState } from 'react';
import {ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import { useSelector, useDispatch } from 'react-redux';


const ToDoList =()=> {
  const toDoList = useSelector((state:any) => state.toDoList)
  const [list,setList] = useState('')
  const dispatch = useDispatch();
  const addTodoList = () => {
    // 用法一樣
    dispatch({
      type: ADD_TODOLIST,
      payload: { list },
    });
  };
  console.log('list=>',list)
  return (
    <>
    <input value={list} onChange={e=>setList(e.target.value)}/>
    <button type='button' onClick={addTodoList}>新增類別</button>
    <ul>{toDoList.map((item:string)=><li>{item}</li>)}</ul>
    </>
  )
}

export default ToDoList;
