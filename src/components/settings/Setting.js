import React from "react";
import {
  Button,
  Container,
  Stack,
  Card,
  ListGroup,
  Form,
} from "react-bootstrap";

export default function Setting() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto" style={{ fontWeight: "bold" }}>
          Settings
        </h2>
        <Button variant="danger" onClick={() => window.location.reload()}>
          <i
            className="bi bi-exclamation-triangle"
            style={{ marginRight: "6px" }}
          />
          Delete Data
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => window.location.reload()}
        >
          <i className="bi bi-archive" style={{ marginRight: "6px" }} />
          Export Data
        </Button>
      </Stack>
      <Card>
        <Card.Header style={{ fontWeight: "bold" }}>General</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Dark Mode
            <Form.Check
              type="switch"
              id="custom-switch"
              style={{ float: "right" }}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}
