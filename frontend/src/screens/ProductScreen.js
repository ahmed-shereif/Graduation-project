import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { ListProductDetails } from '../Redux/actions/productAction'
import Rating from '../components/Rating';

import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductScreen({ match }) {
    const dispatch = useDispatch()
    const productInfo = useSelector(state => state.productDetails)
    const { product, loading, error } = productInfo

    let params = useParams();



    useEffect(() => {
        dispatch(ListProductDetails(params.id))

    }, [params.id, dispatch])




    return (
        <>
            <Link to="/" className='btn btn-light my-3' >Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
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
                                    <Button type="button" disabled={product.countInStock === 0}>Add TO Cart</Button>
                                </ListGroup.Item>
                            </ListGroup >
                        </Card>
                    </Col>
                </Row>
            }
        </>
    )
}

export default ProductScreen