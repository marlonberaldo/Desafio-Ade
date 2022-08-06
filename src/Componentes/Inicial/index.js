import Header from '../Header'
import './inicial.css'
import image from '../../assets/Image.svg'
import charts from '../../assets/charts.svg'

import { AiFillPlayCircle } from 'react-icons/ai'
import NavBar from '../Nav'

const inicial = () => {
    return (
        <>
            <Header />
            <section className='primeira__section '>
                <div className="container container__primeira">
                    <div className="left">
                        <div className="frame_3">
                            <span>New</span>
                            <p>Becoming a new programm certifed</p>
                        </div>
                        <h1>A New Different Way to Improve Your Skill</h1>
                        <div className="mobile">
                            <p className='content'>Learning is a Global training Provider based across the UK test specializes in accredited and bsbespoke csources</p>
                            <div className='botoes'>
                                <a href='#getstart' className='btn'>
                                    Get Started
                                </a>
                                <div className="botaum">
                                    <a href="#more">
                                        <AiFillPlayCircle className='botoes__icone' />
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="charts">
                            <img src={charts} alt="Charts" className='charts-item' />
                        </div>
                        <img src={image} alt="Moca" />

                    </div>
                </div>
            </section>
            <NavBar />

        </>
    )
}

export default inicial