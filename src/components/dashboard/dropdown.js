import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { States } from "../../data/data";
const Dropdown = ({ currentState, setCurrentState }) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Control
            as="select"
            value={currentState.id}
            onChange={(e) => setCurrentState({ id: parseInt(e.target.value) })}
          >
            {States?.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default Dropdown;
