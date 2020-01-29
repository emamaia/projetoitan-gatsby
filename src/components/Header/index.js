import React from 'react';

import './style.css'

function Header(props) {
    return (
        <div className='header-container'>
            
            <div className='header-div'>
                <img className='header-imagem' alt='Imagem de mulher e filho africanos'src={props.imagem}></img>
                <div className='header-text'>
                    <h1>{props.titulo}</h1>
                    <p>{props.historia}</p>
                    <p className='header-instrucao'>{props.instrucao}</p>
                </div>
            </div>

        </div>
    )
}


export default Header