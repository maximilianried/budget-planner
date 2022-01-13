import React from "react";
import { Button, Container, Stack } from "react-bootstrap";

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
