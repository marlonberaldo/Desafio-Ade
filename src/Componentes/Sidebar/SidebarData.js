import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'
import { GiLightBulb } from 'react-icons/gi'
export const SidebarData = [
    {
        titulo: 'Home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        titulo: 'Programms',
        icon: <FaIcons.FaSitemap />,
        cName: 'nav-text'
    },
    {
        titulo: 'Solutions',
        icon: <GiLightBulb />,
        cName: 'nav-text'
    },
    {
        titulo: 'Courses',
        icon: <FaIcons.FaUserGraduate />,
        cName: 'nav-text'
    },
    {
        titulo: 'Partners',
        icon: <FaIcons.FaHandshake />,
        cName: 'nav-text'
    },
    {
        titulo: 'Contacts',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        titulo: 'Log in',
        icon: <FaIcons.FaUserAlt />,
        cName: 'nav-text'
    },
]