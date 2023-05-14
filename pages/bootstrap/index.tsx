import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';

export default function BootstrapDemo() {
    return (
        <Container className="text-center my-3">
            <h1>Bootstrap Demo</h1>
            <Button variant="primary">Primary Button</Button>
            <Card className="my-3" style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}
