import React, {useContext} from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Button from 'react-bootstrap/Button'
import {observer} from 'mobx-react-lite'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom' 

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
    
    
    return (
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration: "none", marginLeft: "1%"}} to={SHOP_ROUTE}>Buy Device</NavLink>
          {user.isAuth ?
            <Nav className="ms-auto" style={{color: 'white', marginRight: "1%"}}>
              <Button 
                variant={"outline-light"} 
                onClick={() => history.push(ADMIN_ROUTE)}
                >
                Admin panel
              </Button>
              <Button 
                variant={"outline-light"} 
                onClick={() => logOut()}
                className="ms-3"
                >
                Log out
              </Button>  
            </Nav>
            :
            <Nav className="ms-auto" style={{color: 'white', marginRight: "1%"}}>
              <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Authorize</Button>  
            </Nav>
          }
        </Container>
      </Navbar>
      
    )
})

export default NavBar;