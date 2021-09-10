import React, {useState, useContext} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import {NavLink, useLocation, useHistory} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import Col from 'react-bootstrap/esm/Col'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)    
            history.push(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin
                        ?
                            <Col>
                                Haven't account yet? 
                                <NavLink style={{textDecoration: "none"}} to={REGISTRATION_ROUTE}>Register</NavLink>
                            </Col> 
                        :
                            <Col>
                                Have an account? 
                                <NavLink style={{textDecoration: "none"}} to={LOGIN_ROUTE}>Enter</NavLink>
                            </Col>
                        }
                        <Col className="d-flex justify-content-end">
                            <Button
                            variant={"outline-success"}
                            onClick={click}
                            >
                                {isLogin ? "Enter" : "Register"}
                            </Button>
                        </Col>
                    </Row>
                    
                </Form>            
            </Card>
            
        </Container>
    )
})

export default Auth;