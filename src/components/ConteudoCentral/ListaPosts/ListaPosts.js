
import { GridList, GridListTile} from '@material-ui/core';
import React, {useState, useContext, useEffect} from 'react';
import './ListaPosts.css'
import Post from './Post/Post';
import {getAllPosts} from '../../../services/postsService';
import {Link, useHistory} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';




import TemaContext from '../../../contexts/TemaContexts'
import { identity } from 'lodash';


const ListaPosts = () => {
    const history = useHistory();

    const historyTest = (id) => {
        history.push(`/post/${id}`)
    }

    const tema = useContext(TemaContext);
    const [lista, setLista ] = useState([]);

    const [listaCurtida, setListaCurtida] = useState([]);

    const listaPosts = async () => {
        const resultado = await getAllPosts();
        const _listaPosts = resultado.data
        setLista(_listaPosts);
    };

    useEffect(() => {
        listaPosts()
    }, []);

    const toggleLike = (id) => {
        const indexCurtida = listaCurtida.indexOf(id);
        let novaListaCurtida = [...listaCurtida]
        
        const indexPostCurtido = lista.findIndex((item) => {
            return item.id === id
        })
        let _lista = [...lista]

        if (indexCurtida > -1) {
            novaListaCurtida.splice(indexCurtida, 1)
            _lista[indexPostCurtido].likes -= 1;
        } else {
            novaListaCurtida.push(id);
            _lista[indexPostCurtido].likes += 1;
        }
        setListaCurtida(novaListaCurtida);
        setLista(_lista);
    };


    return (
        <>
        
        <div className="posts">
                {lista.map((item) => (
                    <>
                        <Link to={`/post/${item.id}`}>
                            <div className="likes"> 
                                <img className="img-post" src={item.image} alt={item.title}/>
                            </div>     
                        </Link>
                        <div>
                            <IconButton onClick = {() => toggleLike(item.id)}>
                                {listaCurtida.indexOf(item.id) > -1 ? <FavoriteIcon/> : <FavoriteBorderIcon/>} 
                            </IconButton>{item.likes}

                        </div>
                    </>
           
            ))}
        </div>
        </>
    );
};

export default ListaPosts;