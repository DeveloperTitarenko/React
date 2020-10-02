// Данные
import {renderEntireTree} from "../render";

export let state = {
    profilePage: {
        posts: [
            {id: 3, message: 'Hi, how are you?', like: 252},
            {id: 2, message: "It's my first post", like: 389},
            {id: 1, message: "hello world!!!", like: 1240}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Semen'},
            {id: 3, name: 'Alexey'},
            {id: 4, name: 'Irina'},
            {id: 5, name: 'Sergey'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'See you'},
            {id: 4, message: 'Nice to meet you'},
            {id: 5, message: 'Good morning'},
        ],
    },

}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0,
    };
    state.profilePage.posts.unshift(newPost);
    renderEntireTree(state, addPost);
};

