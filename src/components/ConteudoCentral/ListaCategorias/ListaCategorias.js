import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './ListaCategorias.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ListaCategorias = ({ lista }) => {

    // const element = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div id="lista-categorias">
            <h2>Lista Categorias</h2>

            <button>Nova categoria</button>

            <div>
                <ul>
                    { lista.map( (item) => 
                        <div className = "categoria-linha">
                            <li key={item.id}>
                                <Link to = {`/post-por-categoria/${item.id}`}> {item.descricao}</Link>
                            </li>
                            <button>Remover</button>
                            {/* {element} */}
                        </div>
                    )}


                    
                </ul>  
            </div>
         
        </div>
    )
};

export default ListaCategorias;