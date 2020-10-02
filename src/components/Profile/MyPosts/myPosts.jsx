import React from "react";
import classes from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({ posts, addPost }) => {
    const postsElements = posts.map(post => <Post massage={post.message} like={post.like}/>);

    let referenceTextArea = React.createRef();

    const addPosts = () => {
        let textAreaValue = referenceTextArea.current.value;
        addPost(textAreaValue);
        referenceTextArea.current.value = '';
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={referenceTextArea}  cols="50" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={ addPosts }>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
}
export default MyPosts;


