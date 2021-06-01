import React from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'


const Cabecalho = ({funcaoConfiguraTema}) => {    
    return (
        <header>
            <h1>Blog</h1>
            <div id="c-temas">
                <p>Temas</p>
                
                <button onClick={()=> {funcaoConfiguraTema()}}>Default Theme</button>
                <button>Black Theme</button>
                <button>Gray Theme</button>
            </div>
            <MenuPrincipal/>
            
        </header>
    )
};

export default Cabecalho;