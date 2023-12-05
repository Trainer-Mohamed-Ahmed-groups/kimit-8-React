import { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap"
export default function Products() {

    let [products, setProducts] = useState([])

    let getData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="text-center">
            <h2>Products</h2>
            <Container>
                <Row>
                    {
                        products.length > 0 ?
                            products.map(product =>
                                <Col className="p-2" lg={4} md={6} sm={12} key={product.id}>
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            :
                            <div className="mt-4 d-flex justify-content-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                    }
                </Row>
            </Container>
        </div>
    )
}
