import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export let renderEntireTree = (objData, funAddPost) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={objData} addPost={funAddPost}/>
        </BrowserRouter> , document.getElementById('root')
    );
}