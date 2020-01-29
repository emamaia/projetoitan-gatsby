import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'


class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aberto: false
        }
    }

    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto }
        })
    }
    render() {
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'

        if (this.state.aberto) {
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
            classesDoBotao += ' navbar-menu__botao--aberto'
        }
        return (
            <div className='nav-menu navbar-links'>
                <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                    Menu
        </span>
                <ul className={classesDasOpcoes}>
                    <li>
                        <Link to='/' className='navbar-links__ativo'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/sobre' className='navbar-links__ativo'>
                            Sobre o projeto
                        </Link>
                    </li>
                    <li>
                        <Link to='/historia' className='navbar-links__ativo'>
                            História
                        </Link>
                    </li>

                </ul>

            </div>
        )
    }
}

export default Menu
