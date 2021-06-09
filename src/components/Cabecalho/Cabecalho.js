import React from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { COR_1, COR_2} from "../../utils/coresTema"


const Cabecalho = ({funcaoConfiguraTema}) => {    

    return (
        <header>
            <h1>Blog</h1>
            <MenuPrincipal/>
            <div id="c-temas">    
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={()=> {funcaoConfiguraTema()}}>Default Theme</Button>
                    <Button onClick={()=> {funcaoConfiguraTema(COR_1)}}>Black Theme</Button>
                    <Button onClick={()=> {funcaoConfiguraTema(COR_2)}}>Gray Theme</Button>
                </ButtonGroup>
                </div>
            
            
        </header>
    )
};

export default Cabecalho;