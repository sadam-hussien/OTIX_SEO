import React from "react";

import { Container } from "react-bootstrap";

import TabTable from "modules/home/components/Tab";

export default function Prices() {
  return (
    <section className="pt pb coins-section prices-page">
      <Container>
        <TabTable />
      </Container>
    </section>
  );
}
