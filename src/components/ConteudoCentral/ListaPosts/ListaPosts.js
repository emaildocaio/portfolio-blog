import React from 'react';
import './ListaPosts.css'
import Post from './Post/Post'

const ListaPosts = () => {
    return (
        <div>
            <div>Lista Posts</div>
            <Post/>
            <Post/>
            <Post/>
            {/* <GridList/> */}
        </div>
    )
};

export default ListaPosts;