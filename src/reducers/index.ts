// Reducer在Redux中是用來保管state
// 以及在接收到不同的 action 指令時該對 state 做什麼動作的函數。

import {CHANGE_TEXT,FINISH_TODOLIST,ADD_TODOLIST,REMOVE_TODOLIST} from '../constants'
import {IState,todos} from '../common/lib'


//在 initState 中將資料架構清楚列出，還能讓接手的人或是兩個禮拜後的自己，一看就能知道這個 Reducer 保管了哪些資料。

export const initState:IState ={
    todos:[
        {id: 0 ,
        toDoList: '12:00 大學同學會',
        done: true}
    ],
    input:{
        text:''
    }
}

//Reducer必須靠傳入action.type 的參數來判斷要執行什麼動作，以及執行此動作的額外參數
//因此在執行事件時，得先設定傳入Reducer的物件：

export const reducer =(state=initState,action:any):IState =>{
    // Reducer本身是一個純函數



    // 該物件有兩個key第一個type代表該執行的事件為何，進入Reducer時也會先判斷type的值
    // payload則是執行事件的額外參數，上方的參數就是事件執行時要傳入的參數。
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


