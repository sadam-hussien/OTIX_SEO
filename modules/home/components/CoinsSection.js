import React from "react";

import { Container } from "react-bootstrap";

import TabTable from "./Tab";

export default function CoinsSection() {
  return (
    <section className="pt pb coins-section">
      <Container>
        <TabTable />
      </Container>
    </section>
  );
}
