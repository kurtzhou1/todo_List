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
        
        //增加選項
        case ADD_TODOLIST:
            const temp_ADD_Todo = state.todos.map(item=>item)
            const todoLength = temp_ADD_Todo.length
            temp_ADD_Todo.push({id:todoLength,toDoList:action.payload.todo,done:false})
            return {...state, todos: temp_ADD_Todo} 
        
        //完成工作
        case FINISH_TODOLIST:
            const temp_Finish_Todo = state.todos
            temp_Finish_Todo[action.payload.doneNo].done = !temp_Finish_Todo[action.payload.doneNo].done
            return {...state, todos:temp_Finish_Todo}
        
        //刪除選項
        case REMOVE_TODOLIST:
            const temp_remove_Todo = state.todos.map(item=>item)
            temp_remove_Todo.splice(action.payload.removeId,1)
            return {...state, todos:temp_remove_Todo}
            
        default:
            return state
    }
}


