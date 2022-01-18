import React from "react";
import { Alert } from "react-bootstrap";

export default function NoContent({ indicator, title, message }) {
  if (indicator.length === 0) {
    return (
      <Alert variant={"warning"}>
        <h5>{title}</h5>
        {message}
      </Alert>
    );
  }

  return null;
}
