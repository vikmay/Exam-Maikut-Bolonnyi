import React from "react";
import { Accordion, Card, Button, Form, Row, Col } from "react-bootstrap";

const Filter = () => {
  return (
    <>
      <div>Filter</div>
      <Accordion>
        <Accordion.Button as={Button} variant="link" eventKey="0">
          Filter 1
        </Accordion.Button>
      </Accordion>
    </>
  );
};

export default Filter;
