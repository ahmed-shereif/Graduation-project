import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

function HomeScreens() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProductJSON() {
            const { data } = await axios('/api/products');

            setProducts(data)
        }
        fetchProductJSON()
    }, [])


    return (
        <div>
            <Row >
                {products.map((product) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id} >
                            <Product product={product} />
                        </Col>
                    )
                })
                }

            </Row>
        </div>
    )
}

export default HomeScreens