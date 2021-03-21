
import React from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'


const BootstarpCard = () => {
    return (
        <div>
            {/* <Card style={{ height: "250px", width: "400px", left: "50px", top: "50px" }}>
                <Card.Img variant="top" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                <Card.Body>
                    <Card.Title>Card Demo</Card.Title>
                    <Card.Text>This is my Cardbootstarp example </Card.Text>
                    <Button variant="primary">Button</Button>
                </Card.Body>
            </Card>
            <Card style={{ height: "250px", width: "400px", left: "500px", top: "50px" }}>
                <Card.Img variant="top" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                <Card.Body>
                    <Card.Title>Card Demo</Card.Title>
                    <Card.Text>This is my Cardbootstarp example </Card.Text>
                    <Button variant="primary">Button</Button>
                </Card.Body>
            </Card>
            <Card style={{ height: "250px", width: "400px", left: "50px", top: "50px" }}>
                <Card.Img variant="top" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                <Card.Body>
                    <Card.Title>Card Demo</Card.Title>
                    <Card.Text>This is my Cardbootstarp example </Card.Text>
                    <Button variant="primary">Button</Button>
                </Card.Body>
            </Card> */}
            <h1>Card Title In bootstarp</h1>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Card style={{ height: "250px", width: "400px", top: "50px", backgroundColor: "lightblue" }}>
                            <Card.Img variant="top" style={{ height: "110px" }} src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                            <Card.Body>
                                <Card.Title>Card Demo</Card.Title>
                                <Card.Text>This is my Cardbootstarp example </Card.Text>
                                <Button variant="primary">Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ height: "250px", width: "400px", left: "20px", top: "50px" }}>
                            <Card.Img variant="top" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                            <Card.Body>
                                <Card.Title>Card Demo</Card.Title>
                                <Card.Text>This is my Cardbootstarp example </Card.Text>
                                <Button variant="primary">Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ height: "250px", width: "400px", left: "20px", top: "50px" }}>
                            <Card.Img variant="top" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg/satellite-image-of-globe.jpg/metofficegovuk%3AheroLarge" />
                            <Card.Body>
                                <Card.Title>Card Demo</Card.Title>
                                <Card.Text>This is my Cardbootstarp example </Card.Text>
                                <Button variant="primary">Button</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default BootstarpCard
