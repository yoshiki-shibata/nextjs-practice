import 'bulma/css/bulma.min.css';
import { Button, Card, Content, Heading, Container } from 'react-bulma-components';

export default function BulmaDemo() {
    return (
        <Container>
            <Heading size={1} textAlign="centered" className="my-3">Bulma Demo</Heading>
            <Button color="primary">Primary Button</Button>
            <Card className="my-3">
                <Card.Content>
                    <Heading size={4}>Card Title</Heading>
                    <Content>Some quick example text to build on the card title and make up the bulk of the card's content.</Content>
                    <Button color="primary">Go somewhere</Button>
                </Card.Content>
            </Card>
        </Container>
    );
}
