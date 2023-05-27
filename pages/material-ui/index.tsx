import { Button, Card, CardContent, Typography, Container } from '@mui/material';

export default function MaterialUIDemo() {
    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Material-UI Demo
            </Typography>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Card style={{ maxWidth: 345, marginTop: 12 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Card Title
                    </Typography>
                    <Typography color="textSecondary" component="p">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Typography>
                    <Button size="small" color="primary">Go somewhere</Button>
                </CardContent>
            </Card>
        </Container>
    );
}
