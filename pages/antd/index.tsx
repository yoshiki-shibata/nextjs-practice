import { Button, Card, Typography, Space } from 'antd';

const { Title, Text } = Typography;

export default function AntDesignDemo() {
    return (
        <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
            <Title level={2}>Ant Design Demo</Title>
            <Button type="primary">Primary Button</Button>
            <Card title="Card Title" style={{ width: 300, margin: '0 auto' }}>
                <Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
                <Button type="primary" style={{ marginTop: 12 }}>Go somewhere</Button>
            </Card>
        </Space>
    );
}
