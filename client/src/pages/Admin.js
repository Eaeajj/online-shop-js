import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

export default function Admin() {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)    
    return (
        <Container className="d-flex flex-column">
            <Button
                onClick={() => setTypeVisible(true)} 
                variant={"outline-dark"}
                className="mt-2 p-4"
                >
                    Add type
                </Button>
            <Button
                onClick={() => setBrandVisible(true)} 
                variant={"outline-dark"}
                className="mt-2 p-4"
                >
                    Add brand
            </Button>
            <Button
                onClick={() => setDeviceVisible(true)} 
                variant={"outline-dark"}
                className="mt-2 p-4"
                >
                    Add device
            </Button> 
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        
        </Container>
    )
}
