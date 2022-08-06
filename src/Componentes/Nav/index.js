import './nav.css'
import rating from '../../assets/Rating.svg'
import logo from '../../assets/main-logo_2.svg'
import abstract from '../../assets/Abstract.svg'
import adobe from '../../assets/Adobe.svg'
import airbnb from '../../assets/Airbnb.svg'
import alpaca from '../../assets/Alpaca.svg'
import aprio from '../../assets/Aprio.svg'

const NavBar = () => {
    return (
        <>
            <section className='navegacao'>
                <div className="up">
                    <div className='up__logo'>
                        <img src={logo} alt="Logo Learning" />
                        <p>More than 10,0000 schools trust Klearning</p>
                    </div>
                    <div className='up__rating'>
                        <img src={rating} alt="Avaliação 5 estrelas" />
                        <p>More than 10,0000 schools trust Klearning</p>
                    </div>
                </div>

                <div className="down">
                    <a href="#abstract"><img src={abstract} alt="Logo Abstract" /></a>
                    <a href="#adobe"><img src={adobe} alt="Logo Adobe" /></a>
                    <a href="#airbnb"><img src={airbnb} alt="Logo Airbnb" /></a>
                    <a href="#alpaca"><img src={alpaca} alt="Logo Alpaca" /></a>
                    <a href="#aprio"><img src={aprio} alt="Logo Aprio" /></a>
                </div>
            </section>
        </>
    )
}

export default NavBar