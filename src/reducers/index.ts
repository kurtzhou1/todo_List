import {ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'

interface IState {
    toDoList:string[]
}

export const initState:IState ={
    toDoList: [],
}

export const reducer =(state=initState,action:any):IState =>{
    switch(action.type){
        case ADD_TODOLIST:
            const tempTodo = state.toDoList.map(item=>item)
            tempTodo.push(action.payload.list)
            return {...state,  toDoList: tempTodo} 
        default:
            return state
    }
}


