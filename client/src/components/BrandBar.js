import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '..'
import { Row, Col} from 'react-bootstrap'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    
    return (
        <Row className="d-flex">
            {device.brands.map(brand => 
                <Col 
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? 'card p-3 border-danger' : 'card p-3 border-light'}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Col>
                )}
        </Row>
    )
})

export default BrandBar