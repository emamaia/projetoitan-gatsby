import React from 'react';
import CaixaTexto from '../../components/CaixaTexto'
import Links from '../../components/Links'


import './style.css'


function Sobre() {
    return (
        <div className='sobre-container'>
            <CaixaTexto
                titulo='Projeto elaborado por Emanuelle Maia, no curso  bootcamp da Reprograma'
                texto='Projeto final do curso de Bootcamp Desenvolvedora Front-end na {Reprograma}. Cada aluna elaborou seu próprio projeto, incluindo design, conteúdo, temas. No projeto apresentado aqui, foi utilizado conhecimentos de html, css, javascript e react.'

            />

            <div className='link-container'>

                <h3>Conheça a Reprograma:</h3>
                <Links
                    link='http://reprograma.com.br/'
                >
                    Reprograma
                </Links>

                <h3>Conheça a autora:</h3>
                <div className='caixa-links'>
                    <Links
                        link='linkedin.com/in/emanuellemaia'
                    >
                        Linkedin
                        </Links>

                    <Links
                        link='https://emamaia.github.io/'
                    >
                        Github
                        </Links>
                </div>
            </div>
        </div>
    )
}


export default Sobre