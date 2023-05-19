import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5} justify="center">
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Шутка!</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>Тут шутка</Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center">
              <Button size="sm" color="secondary">
                Обновить
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
