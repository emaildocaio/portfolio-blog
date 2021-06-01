import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho'
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral'
import BarraLateral from '../BarraLateral/BarraLateral'
import Rodape from '../Rodape/Rodape'

import TemaContext from '../../contexts/TemaContexts'

const PaginaInicial = () => {
    
    const temaDefault = {
        corFundoTema: 'white'
    }
    
    const [tema, setTema] = useState(temaDefault);

    const modificarTema = temaSelecionado => {
        console.log(`Tema Selecionado: ${temaSelecionado}`);

        switch(temaSelecionado){
            case 'rosa': 
            // fazer lguma coisa
                setTema({
                    corFundoTema: 'pink'
                });
            break;
            case 'verde':
                // fazer lguma coisa
                setTema({
                    corFundoTema: 'green'
                });
            break;
            default: 
            // branco
            // fazer alguma coisa
            setTema(temaDefault)
            break;
        }
    }

    return (
        <TemaContext.Provider value={tema}>

            <BrowserRouter>    
                <div id='box-pagina-inicial'>
                    <Cabecalho funcaoConfiguraTema={modificarTema}/>
                    <div id="container">
                        <BarraLateral/>
                        <ConteudoCentral/>
                    </div>
                    <Rodape/>
                </div>
            </BrowserRouter>

        </TemaContext.Provider>
    )
};

export default PaginaInicial;