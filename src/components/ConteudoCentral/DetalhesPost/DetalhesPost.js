import React, { useEffect, useState }  from 'react';
import { useHistory, useParams } from 'react-router-dom'
import './DetalhesPost.css'
import {getPostById} from '../../../services/postsService'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Post = () => {

    const { id } = useParams()

    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        const _postDetail = getPostById(id);
        setPostDetail(_postDetail)
    }, [])

    if (Object.keys(postDetail).length === 0){
        return (
            <div><p>Dados não encontrados!</p></div>
        )
    } 
    
    return (

        <article>
            <div className = "card">
                <img src = {postDetail.image} ></img>
                <div className = "likes">
                    <FavoriteBorderIcon/><p>{postDetail.likes}</p>
                </div>
                <div className='p-categoria'>
                    idCategoria: {postDetail.idCategoria}
                </div>
                <p>{postDetail.description}</p>
            </div>
        </article>
    )
};

export default Post;