import React from 'react';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho'
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral'
import BarraLateral from '../BarraLateral/BarraLateral'
import Rodape from '../Rodape/Rodape'

const PaginaInicial = () => {
    
    return (
        <div id='box-pagina-inicial'>
        
        <Cabecalho/>
        <div id="container">
            <BarraLateral/>
            <ConteudoCentral/>
        </div>
            <Rodape/>
        </div>
    )
};

export default PaginaInicial;