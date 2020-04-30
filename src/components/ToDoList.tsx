import React, { useState } from 'react';
import {CHANGE_TEXT,FINISH_TODOLIST,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import { useSelector, useDispatch } from 'react-redux';
import {IState,todos,input} from '../common/lib'
import './scss/styles.scss'

const ToDoList:React.FC<IState> =()=> {
  const toDoList = useSelector((state:IState) => state.todos)
  const inputText = useSelector((state:IState) => state.input.text)
  console.log('toDoList=>>',toDoList)
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
  const isDone=(value:number)=>{
    dispatch({
      type: FINISH_TODOLIST,
      payload: { doneNo:value },
    });
  }
  
  //刪除代辦事項
  const removeTodoList = (value:number)=>{
    dispatch({
      type: REMOVE_TODOLIST,
      payload: { removeId:value },
    });
  }
  console.log('toDoList=>>',toDoList)
  return (
    <div className="todolist-module">
      <input className="text_input" value={inputText} onChange={e=>setList(e.target.value)} placeholder='type something'/>
      <button className="button_input" type='button' onClick={addTodoList}>＋</button>
        {toDoList.map((item:todos)=>
        <div className='text_content'>
          {item.done ? (<div className='idDone'>已完成</div>) : ''}
          <div className='ID_Wrap'>{item.id}
          <input defaultChecked={item.done} type='checkbox' onChange={()=>isDone(item.id)}/>
          </div>
          <div className='toDoList'>{item.toDoList}</div>
          <button className='delete_button' type='button' onClick={()=>removeTodoList(item.id)}>刪</button>
        </div>)}
    </div>
  )
}

export default ToDoList;


//https://medium.com/lion-f2e/%E5%AF%A6%E4%BD%9C-%E4%BD%BF%E7%94%A8-redux-%E5%AF%A6%E4%BD%9C-todo-list-43fd1d73d4c1