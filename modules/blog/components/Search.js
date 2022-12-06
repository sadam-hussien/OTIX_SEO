import React from "react";

import { Form } from "react-bootstrap";
import { useTranslation } from "next-i18next";

export default function Search({ value, onChange }) {
  const { t } = useTranslation(["tokens"]);
  return (
    <Form.Group
      className="d-flex align-items-center search-group border"
      controlId="formBasicEmail"
    >
      <Form.Label className="search-label m-0">
        <i className="las la-search"></i>
      </Form.Label>
      <Form.Control
        className="border-0 search-input"
        type="text"
        placeholder={t("search_coins")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
}
