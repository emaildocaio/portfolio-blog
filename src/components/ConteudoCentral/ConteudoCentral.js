import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './ConteudoCentral.css';
import ListaPosts from './ListaPosts/ListaPosts';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import NovoPost from './NovoPost/NovoPost';

const ConteudoCentral = () => {
    
    return (
        <main>

            <Switch>

                {/* Redirecionamento ROOT */}
                <Route exact path="/">
                    <Redirect to="/lista-posts"/>
                </Route>

                <Route path="/lista-posts"><ListaPosts/></Route>
                <Route path="/lista-categorias"><ListaCategorias/></Route>
                <Route path="/novo-post"><NovoPost/></Route>
                
                
            </Switch>

        </main>
    )
};

export default ConteudoCentral;