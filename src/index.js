//創建Reducer後，還得將它交由store，store 的工作就是在應用程式中負責整合所有的Reducer。
//創建前，得先從 redux 中 import 進負責創建 store 的函式 createStore ，並將 Reducer 傳入以創建一個 store：

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList.tsx';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {initState, reducer} from './reducers/index'


const store = createStore(reducer,initState);
//得先從 redux 中 import 進負責創建 store 的函式 createStore ，並將 Reducer 傳入以創建一個 store


export const App=()=>{
    return(
        <Provider store={store}><ToDoList/></Provider>
        //Provider是 react-redux中的組件，它會接收上方在Redux中創建的store
        // 並根據和component綁在一起的需求單mapStateToProps上要求的資料從store中取出，再透過props流向component
    )
}

ReactDOM.render(<App />, document.getElementById('root'));