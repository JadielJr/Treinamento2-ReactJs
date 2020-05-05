import * as React from 'react';
import './Nav.component.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="favicon.ico" class="img"></img>
            <div id="nomedosite">Restaurantes</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <Link id="navNamePage" to = "/">
                            Home                        
                        </Link>
                    </li>
                    <li>
                        <Link id="navNamePage" to = "/paginaum">
                            Página um
                        </Link>
                    </li>
                    <li>
                        <Link id="navNamePage" to = "/paginadois">
                            Página dois
                        </Link>
                    </li>
                </ul>
            
            </div>
        </nav>
    )
}
