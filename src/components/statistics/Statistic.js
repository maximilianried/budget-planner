import React from "react";
import { Button, Container, Stack, Card } from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";

import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

export default function Statistic() {
  const { budgets, getBudgetExpenses } = useBudgets();
  const colorArray = [
    "rgb(92, 184, 92)",
    "rgb(91, 192, 222)",
    "rgb(240, 173, 78)",
    "rgba(255, 99, 132)",
    "rgba(54, 162, 235)",
    "rgba(255, 206, 86)",
  ];

  var labelArray = budgets.map((budget) => {
    return budget.name;
  });

  var amountArray = budgets.map((budget) => {
    return getBudgetExpenses(budget.id).reduce(
      (total, expense) => total + expense.amount,
      0
    );
  });

  return (
    <>
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
        >
          <BarChart
            title={"Spendings"}
            description={"Spendings per Budget"}
            label={labelArray}
            amount={amountArray}
            color={colorArray}
          />
          <DoughnutChart
            title={"Combined"}
            description={"All Budgets combined"}
            label={labelArray}
            amount={amountArray}
            color={colorArray}
          />
        </div>
      </Container>
    </>
  );
}
