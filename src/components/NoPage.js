import React from "react";
import { Container, Stack, Button } from "react-bootstrap";

export default function NoPage() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto" style={{ fontWeight: "bold" }}>
          404
        </h2>
        <Button variant="primary" href="/">
          <i className="bi bi-house" style={{ marginRight: "6px" }} />
          Back Home
        </Button>
      </Stack>
      <div>Error 404 Page not found</div>
    </Container>
  );
}
