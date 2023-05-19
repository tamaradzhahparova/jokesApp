import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

export default function App({ joke, fetchData, error }) {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid sm={12} md={5} justify="center">
        <Card css={{ mw: "500px" }}>
          <Card.Header>
            <Text b>{error ? "Error" : "It's a joke"}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>{error ? error : joke}</Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center">
              <Button size="sm" color="secondary" onPress={fetchData}>
                Update
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
