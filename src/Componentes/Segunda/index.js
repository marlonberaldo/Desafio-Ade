import './segunda.css'
import image2 from '../../assets/image2.svg'
import frame from '../../assets/Frame.svg'
import frame_1 from '../../assets/Frame-1.svg'
import frame_2 from '../../assets/Frame-2.svg'

const Segunda = () => {
    return (
        <section className='segunda__section'>
            <div className="container container__segunda">

                <div className="esquerda">
                    <img src={image2} alt="Moça segurando livro" />
                </div>

                <div className="direita">
                    <h2>What Kind of Cources Klearning Offer for Platform</h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enivm ad
                    </p>
                    <ul className="direita__lista">
                        <li className='vetor'>
                            <img src={frame} alt="Vetor" />
                            <h3>1200+ Courses</h3>
                        </li>
                        <li className='vetor'>
                            <img src={frame_1} alt="Vetor" />
                            <h3>200+ Free vids</h3>
                        </li>
                        <li className='vetor'>
                            <img src={frame_2} alt="Vetor" />
                            <h3>10K+ Lessons</h3>
                        </li>
                        <li className='vetor'>
                            <img src={frame_2} alt="Vetor" />
                            <h3>Qualifed Teachers</h3>
                        </li>
                    </ul>
                    <a href="#explore" className='btn botaum'>Explore Cources</a>
                </div>
            </div>
        </section>

    )
}

export default Segunda