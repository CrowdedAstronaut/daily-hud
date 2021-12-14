import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherSearchResults() {
  return (
    <Card
      style={{
        // width: "23rem",
        height: "12.5rem",
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
      }}
    >
      <Card.Body>
        <Card.Title>Daily weather</Card.Title>
        <Card.Text>
          This is the weather search results
        </Card.Text>
        <Card.Link
          href="/weather"
          style={{ color: "white" }}
        >
          These are the weather details
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
