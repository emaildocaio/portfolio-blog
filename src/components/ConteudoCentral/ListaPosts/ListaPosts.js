
import { GridList, GridListTile} from '@material-ui/core';
import React, {useState, useContext, useEffect} from 'react';
import './ListaPosts.css'
import Post from './Post/Post';
import {getPost} from '../../../services/postsService'
import {Link, useHistory} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


import TemaContext from '../../../contexts/TemaContexts'


const ListaPosts = () => {
    const history = useHistory();

    const historyTest = (id) => {
        history.push(`/post/${id}`)
    }

    const tema = useContext(TemaContext);
    const [lista, setLista ] = useState([]);


    useEffect(() => {
        const listaResult = getPost();
        setLista(listaResult);
    }, []);


    return (
        <>
        
        <div className="posts">
                {lista.map((item) => (
           
                        <Link to={`/post/${item.id}`}>
                            <div className="likes">
                                <div>
                                    <FavoriteBorderIcon/>
                                </div>
                                <img className="img-post" src={item.image} alt={item.title}/>
                            </div>     
                        </Link>
           
            ))}
           
        </div>
        </>
    );
};

export default ListaPosts;