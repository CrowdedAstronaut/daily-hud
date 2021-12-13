import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherSearchResults() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Daily weather</Card.Title>
        <Card.Text>
          This is the weather search results
        </Card.Text>
        <Card.Link href="#">Weather Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
