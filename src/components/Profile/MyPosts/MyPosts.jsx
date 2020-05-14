import React from 'react';
import classes from './MyPosts.module.css'; //object
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 0, message: 'Knowledge is power, guard it well.', likesCount: 12},
        {id: 1, message: 'An open mind is like a fortress with its gates unbarred and unguarded.', likesCount: 10},
        {id: 2, message: 'Innocence proves nothing.', likesCount: 100500}
    ]

    let postElements = postsData.map( (el) => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    } )

    return (
        <div>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>{postElements}</div>
        </div>
    )
}

export default MyPosts;