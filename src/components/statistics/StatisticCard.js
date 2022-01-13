import React from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";

export default function StatisticCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Budgets</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          How the Budget is split
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
