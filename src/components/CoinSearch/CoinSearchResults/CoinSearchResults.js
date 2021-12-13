import React from "react";
import { Card } from "react-bootstrap";

export default function CoinSearchResults() {
  return (
    <Card
      style={{
        // width: "23rem",
        height: "12.5rem",
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
      }}
    >
      <Card.Body>
        <Card.Title>Coin Search</Card.Title>
        <Card.Text>
          These are the CoinSearch Results
        </Card.Text>
        <Card.Link href="#" style={{ color: "white" }}>
          Coin Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
