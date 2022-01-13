import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import Chart from "chart.js/auto";

export default function DoughnutChart({
  title,
  description,
  label,
  amount,
  color,
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
        <Card.Text>
          <Doughnut
            data={{
              labels: label,
              datasets: [
                {
                  label: "Budgets",
                  data: amount,
                  backgroundColor: color,
                },
              ],
            }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
