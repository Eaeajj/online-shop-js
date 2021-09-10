import React, {useEffect, useState} from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import ellipse from '../assets/Ellipse 1.png'
import { fetchOneDevice } from '../http/deviceAPI'

export default function DevicePage() {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${ellipse}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>    
                </Col>

                <Col md={4}>
                    <Card
                    className="d-flex align-items-center justify-content-center"
                    style={{width: 300, height: 300, fontSize: 32, border: '3px solid lightgray', borderRadius: '5%'}}
                    >
                        <h3>From: {device.price} rub.</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-5">
                <h1>Characteristics</h1>
                {device.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 8}}>
                      {info.title} : {info.description}  
                    </Row>

                    )}
            </Row>
        </Container>
    )
}
