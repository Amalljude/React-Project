import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <header style={{marginTop:'20px',width:'100%',height:'140px', display: 'flex',justifyContent:'center',flexDirection: 'row', flex: 'wrap',backgroundColor:'black',marginTop:'0',color:'white'}}>



                <div style={{marginLeft:'880px',display: 'flex',flexDirection: 'row',gap:'30px',color:'white', alignItems: 'center'}}>
                <Link to="/home" style={{fontSize:'20px',marginTop:'70px',textDecoration:'none',color:'white'}}>HOME</Link>
                <Link to="/about" style={{fontSize:'20px',marginTop:'70px',textDecoration:'none',color:'white'}}>ABOUT</Link>
                <Link to="/help" style={{fontSize:'20px',marginTop:'70px',textDecoration:'none',color:'white'}}>HELP</Link>
                

                 <Dropdown style={{fontSize:'20px',marginTop:'65px'}}>
                <Dropdown.Toggle  style={{height:'40px'}}variant='success'>LOGIN</Dropdown.Toggle>

                <Dropdown.Menu style={{backgroundColor:'lightgray'}}>
                    <Dropdown.Item href="adminlog"><Link style={{textDecoration:'none',color:'black'}}>Admin</Link></Dropdown.Item>
                    <Dropdown.Item href="reg"><Link  style={{textDecoration:'none',color:'black'}} to={'/reg'}>User</Link></Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
          
                </div>
            </header>
        </div>
    )
}

export default Header
