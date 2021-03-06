import React from "react";
import { Modal, Button, Stack } from "react-bootstrap";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../../contexts/BudgetsContext";
import { currencyFormatter } from "../../utils";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div style={{ fontWeight: "bold" }}>Expenses - {budget?.name}</div>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {expenses.map((expense) => (
            <Stack direction="horizontal" gap="2" key={expense.id}>
              <div className="me-auto fs-5">{expense.description}</div>
              <div className="fs-5">
                {currencyFormatter.format(expense.amount)}
              </div>
              <Button
                onClick={() => deleteExpense(expense)}
                size="sm"
                variant="danger"
                style={{ marginLeft: "6px" }}
              >
                <i class="bi bi-trash" />
              </Button>
            </Stack>
          ))}
        </Stack>
        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
          <Button
            onClick={() => {
              deleteBudget(budget);
              handleClose();
            }}
            variant="danger"
            style={{ float: "right", marginTop: "22px" }}
          >
            <i class="bi bi-folder-x" style={{ marginRight: "8px" }} />
            Delete {budget?.name}
          </Button>
        )}
      </Modal.Body>
    </Modal>
  );
}
