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
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h2 className="me-auto" style={{ fontWeight: "bold" }}>
          Settings
        </h2>
        <Button
          variant="danger"
          onClick={() => alert("This Feature isn't fully functional yet")}
        >
          <i
            className="bi bi-exclamation-triangle"
            style={{ marginRight: "6px" }}
          />
          Delete Data
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => alert("This Feature isn't fully functional yet")}
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
              checked={darkMode}
              onClick={() => {
                setDarkMode(!darkMode);
                window.location.reload();
              }}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ marginTop: "22px" }}>
        <Card.Body>
          Maximilian Ried
          <br />
          Developed in Bonn
        </Card.Body>
      </Card>
    </Container>
  );
}
