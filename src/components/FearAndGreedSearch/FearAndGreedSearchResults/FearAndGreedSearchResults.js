import React from "react";
import { Card } from "react-bootstrap";

export default function FearAndGreedSearchResults() {
  return (
    <Card style={{ width: "18rem" }} backgroundColor="grey">
      <Card.Body>
        <Card.Title>Fear and Greed Index</Card.Title>
        <Card.Text>
          These are the FearAndGreedSearch Results
        </Card.Text>
        <Card.Link href="#">FearAndGreed Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
