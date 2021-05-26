import React from 'react';
import './ConteudoCentral.css';
import ListaPosts from './ListaPosts/ListaPosts';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import NovoPost from './NovoPost/NovoPost';

const ConteudoCentral = () => {
    
    return (
        <main>
            <h1>Conteudo Central</h1>
            <ListaPosts/>
            <ListaCategorias/>
            <NovoPost/>

        </main>
    )
};

export default ConteudoCentral;