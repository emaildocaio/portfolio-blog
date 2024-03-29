import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './ConteudoCentral.css';
import ListaPosts from './ListaPosts/ListaPosts';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import NovoPost from './NovoPost/NovoPost';
import Post from './ListaPosts/Post/Post'
import DetalhesPost from './DetalhesPost/DetalhesPost'
import PostsPorCategoria from './PostsPorCategoria/PostsPorCategoria'
import pegarCategorias from '../../utils/pegarCategorias'
import pegarPosts from '../../utils/pegarPosts'


const ConteudoCentral = () => {
    
    const [ posts, setPosts ] = useState([]);
    const [ categorias, setCategorias] = useState([]);

    useEffect( () => {
        pegarCategorias( setCategorias );
    }, []);

    useEffect( () => {
        pegarPosts( setPosts );
    }, []);


    return (
        <main>

            <Switch>

                {/* Redirecionamento ROOT */}
                <Route exact path="/">
                    <Redirect to="/lista-posts"/>
                </Route>
            
                <Route path="/lista-posts"><ListaPosts lista = { posts }/></Route>
                <Route path="/lista-categorias"><ListaCategorias lista = { categorias} /></Route>
                <Route path="/novo-post"><NovoPost categorias = {categorias} /></Route>

                <Route path="/post/:id"><DetalhesPost/></Route>
                {/* <Route path="/post/:id" component = { Post } /> */}
                
                <Route path="/post-categoria/:idCategoria"><PostsPorCategoria/></Route>
                
            </Switch>

        </main>
    )
};

export default ConteudoCentral;