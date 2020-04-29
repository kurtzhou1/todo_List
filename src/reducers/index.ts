import {CHANGE_TEXT,FINISH_TODOLIST,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import {IState,todos} from '../common/lib'


export const initState:IState ={
    todos:[
        {id: 0 ,
        toDoList: 'Hello~ 你好嗎，撞新幹線，珍重再見，臍帶再相逢',
        done: true}
    ],
    input:{
        text:''
    }
}

export const reducer =(state=initState,action:any):IState =>{
    // console.log('state=>>>>',state)
    // console.log('action=>>>>',action)
    switch(action.type){
        //改變輸入內容
        case CHANGE_TEXT:
            return {...state,input:{text:action.payload.input}}
        case ADD_TODOLIST:
            const temp_ADD_Todo = state.todos.map(item=>item)
            const todoLength = temp_ADD_Todo.length
            temp_ADD_Todo.push({id:todoLength,toDoList:action.payload.todo,done:false})
            return {...state,  todos: temp_ADD_Todo} 
        case FINISH_TODOLIST:
            const temp_Finish_Todo = state.todos
            temp_Finish_Todo[action.payload.doneNo].done = !temp_Finish_Todo[action.payload.doneNo].done
            console.log(temp_Finish_Todo)
            return {...state, todos:temp_Finish_Todo}
        // case REMOVE_TODOLIST:
        default:
            return state
    }
}


