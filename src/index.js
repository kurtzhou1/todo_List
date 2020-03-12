import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList.tsx';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {initState, reducer} from './reducers/index'


const store = createStore(reducer,initState);

export const App=()=>{
    return(
        <Provider store={store}><ToDoList/></Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

//https://www.pkstep.com/archives/33942