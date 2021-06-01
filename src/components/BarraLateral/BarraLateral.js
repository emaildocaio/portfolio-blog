import React from 'react';
import {Link} from "react-router-dom";
import './BarraLateral.css';

const BarraLateral = () => {
    
    return (
        <aside>
            <ul>
                <li className="hashtag"><Link to='#'>#praias</Link></li>
                <li className="hashtag"><Link to='#'>#montanhas</Link></li>
                <li className="hashtag"><Link to='#'>#cidades</Link></li>
                <li className="hashtag"><Link to='#'>#cachoeiras</Link></li>
            </ul>
        </aside>
    )
};

export default BarraLateral;