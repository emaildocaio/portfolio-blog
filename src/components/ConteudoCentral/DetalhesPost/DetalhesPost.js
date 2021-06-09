import React, { useEffect, useState }  from 'react';
import { useHistory, useParams } from 'react-router-dom'
import './DetalhesPost.css'
import {getPostById} from '../../../services/postsService'

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
            <div>
                <div className='p-categoria'>
                    Categoria: Montanha
                </div>
                <img src = {postDetail.image} ></img>
            </div>

            {JSON.stringify(postDetail)}
        </article>
    )
};

export default Post;