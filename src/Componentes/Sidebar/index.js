import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import './sidebar.css'

const Sidebar = () => {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem >Dashboard</MenuItem>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar