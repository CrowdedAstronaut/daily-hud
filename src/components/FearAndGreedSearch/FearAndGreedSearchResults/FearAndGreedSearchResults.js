import React from "react";
import { Card } from "react-bootstrap";

export default function FearAndGreedSearchResults() {
  return (
    <Card
      style={{
        // width: "23rem",
        height: "12.5rem",
        backgroundColor: "purple",
        color: "white",
        textAlign: "center",
      }}
    >
      <Card.Body>
        <Card.Title>Fear and Greed Index</Card.Title>
        <Card.Text>
          The FearAndGreedSearch Results
        </Card.Text>
        <Card.Link href="#" style={{ color: "white" }}>
          FearAndGreed Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
