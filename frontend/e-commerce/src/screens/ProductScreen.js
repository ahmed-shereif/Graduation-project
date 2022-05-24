import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";

import Rating from '../components/Rating';
import axios from 'axios';

function ProductScreen({ match }) {
    const [product, setProduct] = useState([])
    let params = useParams();

    useEffect(() => {
        const getProduct = async () => {
            let { data } = await axios.get(`/api/products/${params.id}`)
            setProduct(data)
        }
        getProduct()
    }, [params.id])




    return (
        <>
            <Link to="/" className='btn btn-light my-3' >Go Back</Link>
            <Row>
                <Col lg={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col lg={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item ><h3>{product.name}</h3> </ListGroup.Item>


                        <ListGroup.Item ><Rating value={product.rating} text={`${product.numReviews} reviews`} /> </ListGroup.Item>

                        <ListGroup.Item>Price:${product.price} </ListGroup.Item>


                        <ListGroup.Item>description:{product.description} </ListGroup.Item>
                    </ListGroup >
                </Col>
                <Col lg={3} className='my-sm-2 my-lg-0 '>
                    <Card>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item >
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? `In Stock` : `Out Of Stock`}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-grid ">
                                <Button type="button">Add TO Cart</Button>
                            </ListGroup.Item>
                        </ListGroup >
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default ProductScreen