import React from "react";
import { Button, Container, Stack } from "react-bootstrap";

export default function Setting() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto" style={{ fontWeight: "bold" }}>
          Statistics
        </h2>
        <Button variant="primary" onClick={() => window.location.reload()}>
          <i className="bi bi-arrow-repeat" style={{ marginRight: "6px" }} />
          Recompute
        </Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      ></div>
    </Container>
  );
}
