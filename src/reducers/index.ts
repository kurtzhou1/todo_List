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
            const temp_Finish_Todo = state.todos.map(item=>item)
            temp_Finish_Todo[action.payload.doneNo].done = !temp_Finish_Todo[action.payload.doneNo].done
            return {...state, todos:temp_Finish_Todo}
        
        //刪除選項
        case REMOVE_TODOLIST:
            const remove_Finish_Todo = state.todos.map(item=>item)
            const index = state.todos.find((todo) => {
                return todo.id === action.payload.removeId
            });
            if (index)
            remove_Finish_Todo.splice(index.id, 1);
            for (var i = 0; i < remove_Finish_Todo.length; i++) {
                remove_Finish_Todo[i].id = i;
            }
            return {...state, todos:remove_Finish_Todo}
            
        default:
            return state
    }
}


