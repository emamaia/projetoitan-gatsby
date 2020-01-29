import React from 'react';
import CaixaTexto from '../../components/CaixaTexto'
import Button from '../../components/Button';

import './style.css'


class Erro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dica: [],
            msgErro: []
        }
    }


    handleVoltar = () => {

        this.props.history.push({
            pathname: '/'
        })
    }

    render() {

        return (
            <div className='erro-container'>
                <CaixaTexto
                    titulo='OPA! PARECE QUE ITAN NÃO ESTEVE AQUI'
                    texto='Clique em voltar para continuar ajudando Inaê na busca por Itan...'
                />

                <div className='erro-btn'>
                    <Button
                        handleClick={this.handleVoltar}
                    > >>Voltar</Button>
                </div>
            </div >
        )
    }
}


export default Erro
