import React, { useContext } from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { COR_1, COR_2} from "../../utils/coresTema"
import TemaContext from '../../contexts/TemaContexts'
import FotoPerfil from '../../img/caio_profile.jpg'


const Cabecalho = ({funcaoConfiguraTema}) => {
    
    const tema = useContext(TemaContext);

    return (
        <header>
            <MenuPrincipal/>
            <div className="perfil" style={ { backgroundColor: tema.corFundoTema, color: tema.corLetra}}>
                <img src= {FotoPerfil} className="foto-perfil"/> 
                <div className="perfil-texto">
                        <h1>@emalgumlugardomundo</h1>
                        <div className="qtdade">
                            <p>815 fotos</p>
                            <p>15K trabalhos</p>
                            <p>980 clientes</p>
                        </div>
                        <div className="descricao">
                            <h2>Em Algum Lugar do Mundo</h2>
                            <p>✈️ Um casal em uma viagem só de ida ✈️</p>
                            <p>👩‍💻👨‍💻 Blogueiros 📷  🎥  Criadores de conteúdo</p>
                            <p>🌍 41 países</p>
                            <p>Acesse emalgumlugardomundo.com.br
</p>
                        </div>
                </div>
             </div>
            
            <div id="c-temas">    
                <ButtonGroup disableElevation variant="contained" color="default">
                    <Button onClick={()=> {funcaoConfiguraTema()}}>Default Theme</Button>
                    <Button onClick={()=> {funcaoConfiguraTema(COR_1)}}>Black Theme</Button>
                    <Button onClick={()=> {funcaoConfiguraTema(COR_2)}}>Gray Theme</Button>
                </ButtonGroup>
                </div>
            
            
        </header>
    )
};

export default Cabecalho;