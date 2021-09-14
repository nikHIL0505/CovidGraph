import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col, Card } from "react-bootstrap";
import { Data, States } from "../../data/data";
const Graph = ({ currentState }) => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body style={{ padding: "1rem 1rem" }}>
              <Card.Title style={{ marginBottom: "1rem" }}>
                Covid Tracker
              </Card.Title>
              <Line
                height="96"
                data={{
                  labels: Data.filter(
                    (t) =>
                      t.State ===
                      States.find((i) => i.id === currentState.id).name
                  ).map((t) => new Date(t.Date).toLocaleDateString()),
                  datasets: [
                    {
                      data: Data.filter(
                        (t) =>
                          t.State ===
                          States.find((i) => i.id === currentState.id).name
                      ).map((t) => t.Confirmed),
                      label: "Confirmed",
                      backgroundColor: "#00ccff",
                    },
                    {
                      data: Data.filter(
                        (t) =>
                          t.State ===
                          States.find((i) => i.id === currentState.id).name
                      ).map((t) => t.Recovered),
                      label: "Recovered",
                      backgroundColor: "#ff3300",
                    },
                    {
                      data: Data.filter(
                        (t) =>
                          t.State ===
                          States.find((state) => state.id === currentState.id)
                            .name
                      ).map((t) => t.Deceased),
                      label: "Deceased",
                      backgroundColor: "#e6e600",
                    },
                    {
                      data: Data.filter(
                        (t) =>
                          t.State ===
                          States.find((i) => i.id === currentState.id).name
                      ).map((t) => t.Other),
                      label: "Other",
                      backgroundColor: "#009933",
                    },
                    {
                      data: Data.filter(
                        (t) =>
                          t.State ===
                          States.find((i) => i.id === currentState.id).name
                      ).map((t) => t.Tested),
                      label: "Tested",
                      backgroundColor: "#ff6600",
                    },
                  ],
                }}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          callback: function (label, index, labels) {
                            return label + "lakhs";
                          },
                        },
                      },
                    ],
                  },
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Graph;
