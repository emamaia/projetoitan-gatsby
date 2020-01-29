import React from 'react';

import './style.css'

function CaixaTexto(props) {
    return (
       
            <div className='caixa-container'>
                <div className='caixa-texto'>
                    <h3 className='caixa-descricao'>{props.titulo}</h3>
                    <p className='caixa-descricao' >{props.texto}</p>
                    <span>{props.span}</span>

                </div>
            </div>    
    )
}

export default CaixaTexto