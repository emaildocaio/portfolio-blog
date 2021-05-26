import React from 'react';
import './MenuPrincipal.css'

const MenuPrincipal = () => {
    return (
        <nav>
            <ul>
                <li><a href="/lista-posts">Posts</a></li>
                <li><a href="/categorias">Categorias</a></li>
                <li><a href="/novo-post">Novo Post</a></li>
            </ul>
        </nav>
    )
};

export default MenuPrincipal;