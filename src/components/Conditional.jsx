import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

export default function Conditional() {
    var isStored = true
    return (
        <div className="condition">
            <h2>Conditional</h2>

            {/* {isStored ? <div>I am Ok</div> : <div>I am No</div>} */}
            {<div>I am {isStored ? "OK" : "NO"}</div>}

            {isStored && <div>I am Ok</div>}
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>


            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={6} sm={12}>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
