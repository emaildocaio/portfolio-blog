import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho'
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral'
import BarraLateral from '../BarraLateral/BarraLateral'
import Rodape from '../Rodape/Rodape'

import TemaContext from '../../contexts/TemaContexts'
import { COR_1, COR_2} from "../../utils/coresTema"

const PaginaInicial = () => {
    
    const temaDefault = {
        corFundoTema: 'white',
        corLetra: "black",

    }

    const [tema, setTema] = useState(temaDefault);

    const modificarTema = (temaSelecionado) => {
        // console.log(`Tema Selecionado: ${temaSelecionado}`);

        switch(temaSelecionado){
            case COR_1: 
            // fazer lguma coisa
            document.body.style.backgroundColor = "black";
                setTema({
                    corFundoTema: 'black',
                    corLetra: "white"
                });
            break;
            case COR_2:
                // fazer lguma coisa
                document.body.style.backgroundColor = "gray";
                setTema({
                    corFundoTema: 'gray',
                    corLetra:'white'
                });
            break;
            default: 
            // branco
            // fazer alguma coisa
            document.body.style.backgroundColor = "";

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