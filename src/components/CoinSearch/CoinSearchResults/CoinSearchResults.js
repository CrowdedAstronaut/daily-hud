import React from "react";
import { Card } from "react-bootstrap";

export default function CoinSearchResults() {
  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Coin Search</Card.Title>
        <Card.Text>
          These are the CoinSearch Results
        </Card.Text>
        <Card.Link href="#">Coin Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
