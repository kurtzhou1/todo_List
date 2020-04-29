import React, { useState } from 'react';
import {CHANGE_TEXT,FINISH_TODOLIST,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import { useSelector, useDispatch } from 'react-redux';
import {IState} from '../common/lib'

const ToDoList:React.FC<IState> =()=> {
  const toDoList = useSelector((state:any) => state.todos)
  const inputText = useSelector((state:any) => state.input.text)
  
  const dispatch = useDispatch();

  //改變輸入內容
  const setList=(value:string)=>{
    dispatch({
      type: CHANGE_TEXT,
      payload: { input:value },
    });
  }

  //增加代辦事項
  const addTodoList = () => {
    dispatch({
      type: ADD_TODOLIST,
      payload: { todo:inputText },
    });
  };

  //是否完成
  const isDone=(value:boolean)=>{
    dispatch({
      type: FINISH_TODOLIST,
      payload: { doneNo:value },
    });
  }
  
  //刪除代辦事項
  const removeTodoList = ()=>{
    dispatch({
      type: REMOVE_TODOLIST,
      payload: { id:id },
    });
  }
  return (
    <>
    <input value={inputText} onChange={e=>setList(e.target.value)}/>
    <button type='button' onClick={addTodoList}>新增類別</button>
    <div>{toDoList.map((item:any)=><div><div>NO. {item.id}</div><div>
    <input defaultChecked={item.done} type='checkbox' onChange={()=>isDone(item.id)}/><label>isDone</label></div>
    <div>{item.toDoList}</div><button type='button' onClick={()=>removeTodoList()}>刪除</button></div>)}
    </div>
    </>
  )
}

export default ToDoList;


//https://medium.com/lion-f2e/%E5%AF%A6%E4%BD%9C-%E4%BD%BF%E7%94%A8-redux-%E5%AF%A6%E4%BD%9C-todo-list-43fd1d73d4c1