import './header.css'
import logo from '../../assets/main-logo.svg'
// import { TiThMenuOutline } from 'react-icons/ti'

const Header = () => {
    return (
        <header>
            <div className="container container__header">
                <div className="logo">
                    <a href="#header"><img src={logo} alt="Logo Desafio" /></a>
                </div>

                <ul className="lista__header">
                    <li className="lista__header-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="lista__header-item">
                        <a href="#programms">Programms</a>
                    </li>
                    <li className="lista__header-item">
                        <a href="#solutions">Solutions</a>
                    </li>
                    <li className="lista__header-item">
                        <a href="#courses">Cources</a>
                    </li>
                    <li className="lista__header-item">
                        <a href="#partners">Partners</a>
                    </li>
                    <li className="lista__header-item">
                        <a href="#contact">Contacts</a>
                    </li>
                </ul>

                <div className="lista__login">
                    <a href="#login" className="login">Log in</a>
                    <a href="#sign" className="botao btn">Sign In</a>
                </div>
            </div>

            <div className="header__mobile">
                {/* <TiThMenuOutline /> */}
                <div className="logo">
                    <a href="#header"><img src={logo} alt="Logo Desafio" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header