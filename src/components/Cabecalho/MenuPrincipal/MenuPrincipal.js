import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import './MenuPrincipal.css';

import TemaContext from '../../../contexts/TemaContexts'

const MenuPrincipal = () => {

    const tema = useContext(TemaContext);

    return (
        <nav style={ { backgroundColor: tema.corFundoTema, color: tema.corLetra}}>
            <ul>
                <li><Link to='/lista-posts'>Posts</Link></li>
                <li><Link to='/lista-categorias'>Categorias</Link></li>
                <li><Link to='/novo-post'>Novo Post</Link></li>
            </ul>
        </nav>
    )
};

export default MenuPrincipal;