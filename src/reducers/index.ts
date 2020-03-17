import {CHANGE_TEXT,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import {IState} from '../common/lib'


export const initState:IState ={
    todos:[
        {no: 0 ,
        toDoList: '',
        done: false}
    ],
    input:{
        text:''
    }
    
}

export const reducer =(state=initState,action:any):IState =>{
    switch(action.type){
        case ADD_TODOLIST:
            const tempTodo = state.todos.map(item=>item)
            console.log('tempTodo=>>>',tempTodo)
            const todoLength = tempTodo.length
            tempTodo.push({no:todoLength,toDoList:action.payload.todo,done:false})
            return {...state,  todos: tempTodo} 
        case CHANGE_TEXT:
            return {...state,input:{text:action.payload.input}}
        default:
            return state
    }
}


