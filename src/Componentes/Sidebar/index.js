// import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SidebarData } from './SidebarData'
// import * as FaIcons from 'react-icons/fa'
import { TiThMenuOutline } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib'
import { FaUserSecret } from 'react-icons/fa'
import './sidebar.css'


const Sidebar = () => {

    const [barralateral, setBarralateral] = useState(false)
    const showBarralateral = () => setBarralateral(!barralateral)

    return (
        <>
            <IconContext.Provider value={{ color: '#5FAEC4' }}>

                <div className="sidebar">
                    <a href='#ui' className='menu-bars'>
                        <TiThMenuOutline onClick={showBarralateral} />
                    </a>
                </div>

                <nav className={barralateral ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" >
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path}>
                                        {item.icon}
                                        <span>{item.titulo}</span>
                                    </a>
                                </li>
                            )
                        })}
                        <li className="nav-text perfil">
                            <a href="https://portifolio-zeta-pied.vercel.app/" target="_blank" rel='noreferrer'>
                                <FaUserSecret />
                                <span>MB</span>
                            </a>
                        </li>
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar