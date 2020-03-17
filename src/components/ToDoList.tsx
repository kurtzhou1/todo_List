import React, { useState } from 'react';
import {CHANGE_TEXT,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import { useSelector, useDispatch } from 'react-redux';
import {IState} from '../common/lib'

const ToDoList:React.FC<IState> =()=> {
  const toDoList = useSelector((state:any) => state.todos)
  const inputText = useSelector((state:any) => state.input.text)
  console.log('toDoList=>',toDoList)
  
  const dispatch = useDispatch();
  const addTodoList = () => {
    // 用法一樣
    dispatch({
      type: ADD_TODOLIST,
      payload: { todo:inputText },
    });
  };
  const setList=(value:string)=>{
    dispatch({
      type: CHANGE_TEXT,
      payload: { input:value },
    });
  }
  return (
    <>
    <input value={inputText} onChange={e=>setList(e.target.value)}/>
    <button type='button' onClick={addTodoList}>新增類別</button>
    <ul>{toDoList.map((item:any)=><li>{item.toDoList}</li>)}</ul>
    </>
  )
}

export default ToDoList;


//https://medium.com/lion-f2e/%E5%AF%A6%E4%BD%9C-%E4%BD%BF%E7%94%A8-redux-%E5%AF%A6%E4%BD%9C-todo-list-43fd1d73d4c1