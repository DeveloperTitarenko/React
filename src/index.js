import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Данные
export const posts = [
    {id: 1, message: 'Hi, how are you?', like: 252},
    {id: 2, message: "It's my first post", like: 389},
    {id: 3, message: "hello world!!!", like: 1240}
]

export const dialogs = [
    {id: 1 ,name: 'Vlad'},
    {id: 2 ,name: 'Semen'},
    {id: 3 ,name: 'Alexey'},
    {id: 4 ,name: 'Irina'},
    {id: 5 ,name: 'Sergey'},
]

export const messages = [
    {id: 1 ,message: 'Hi'},
    {id: 2 ,message: 'How are you'},
    {id: 3 ,message: 'See you'},
    {id: 4 ,message: 'Nice to meet you'},
    {id: 5 ,message: 'Good morning'},
]


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

