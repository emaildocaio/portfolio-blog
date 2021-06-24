
import { GridList, GridListTile} from '@material-ui/core';
import React, {useState, useContext, useEffect} from 'react';
import './PostsPorCategoria.css'
import Post from '../ListaPosts/Post/Post';
import {getAllPosts} from '../../../services/postsService'
import { useParams } from 'react-router'
import {Link, useHistory} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


import TemaContext from '../../../contexts/TemaContexts'



const ListaPosts = () => {
    const history = useHistory();

    const { idCategoria } = useParams();
    
    const historyTest = (id) => {
        history.push(`/post/${id}`)
    }

    const tema = useContext(TemaContext);
    const [lista, setLista ] = useState([]);

    const[listaPostFiltrado, setListaPostFiltrado] = useState([]);

    useEffect(() => {
        const listaResult = getAllPosts();
        setLista(listaResult);
    }, []);

    useEffect(()=> {
        const novaLista = lista.filter(i => parseInt(i.idCategoria) === parseInt(idCategoria));
        setListaPostFiltrado(novaLista)
        console.log(novaLista, lista)
    }, [lista, idCategoria])



    return (
        <div className="grid" style={ { backgroundColor: tema.corFundoTema, color: tema.corLetra}}>
            <GridList cellHeight={300} cols={4}>
                {listaPostFiltrado.map((item) => (
                <GridListTile key={item.image} cols={item.cols || 1}>
                    <div>
                        <div>
                            <FavoriteBorderIcon/>
                            <ChatBubbleOutlineIcon/>
                        </div>
                        <Link to={`/post/${item.id}`}><img src={item.image} alt={item.title}/></Link>
                    </div>
                </GridListTile>
            ))}
            </GridList>
            
        </div>
    );
};

export default ListaPosts;