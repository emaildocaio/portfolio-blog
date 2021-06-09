import React, { useState, useEffect, useContext } from 'react';
import {Link} from "react-router-dom";
import './BarraLateral.css';
import Busca from './Busca/Busca'
import pegarCategorias from '../../utils/pegarCategorias'

import TemaContext from '../../contexts/TemaContexts'


const BarraLateral = () => {
    
    var tema = useContext(TemaContext);

    var [ categorias, setCategorias] = useState([]);

    useEffect( () => {
        pegarCategorias( setCategorias );
    }, []);
    
    return (
        <aside style={ { backgroundColor: tema.corFundoTema, color: tema.corLetra}}>
            
            <ul className= "lista-barra-lateral">
                { categorias.map( (item) => 
                    <li key={item.id} >
                        <Link to = {`/post-categoria/${item.id}`}> {item.descricao}</Link>
                    </li>
                )}
            </ul>  
            <Busca/>
        </aside>
    )
};

export default BarraLateral;