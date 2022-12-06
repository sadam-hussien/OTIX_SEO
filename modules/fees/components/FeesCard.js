import React from "react";

import { Col, Row } from "react-bootstrap";

import { useTranslation } from "next-i18next";

export default function FeesCard({
  subtitle,
  title,
  icon,
  desc,
  notes = [],
  countries = [],
  fees,
}) {
  const { t } = useTranslation(["fees"]);
  return (
    <div className="position-relative fees-card">
      <Row className="justify-content-between">
        <Col lg="7">
          <div className="fees-card-inner">
            <h6 className="subtitle text-uppercase">{t(subtitle)}</h6>
            <h3 className="title d-flex align-items-center gap-3 text-capitalize">
              {icon ? (
                <span className="icon">{icon}</span>
              ) : (
                <span className="icon">
                  <i className="las la-hand-holding-usd"></i>
                </span>
              )}
              <span className="text">{t(title)}</span>
            </h3>
            <p className="desc text-muted">{t(desc)}</p>
            {notes.length ? (
              <ul className="list-unstyled m-0 p-0 fees-notes">
                <li className="fees-notes-title text-capitalize">
                  {t("additional_notes")}:
                </li>
                {notes.map((item, index) => (
                  <li key={index} className="fees-note-item d-flex text-muted">
                    {t(item)}
                  </li>
                ))}
              </ul>
            ) : null}

            {countries.length ? (
              <h6 className="fees-supported-countries text-capitalize mb-0">
                <span>{t("supported_countries")}:</span>
                {countries.length > 7 ? (
                  <>
                    {countries.slice(0, 7).map((item, index) => item + ", ")}
                    {t("and_more")}
                  </>
                ) : (
                  countries.map((item, index) => item + ", ")
                )}
              </h6>
            ) : null}
          </div>
        </Col>
        <Col lg="4">
          <div className="fees-card-fees">
            <h5 className="text-center m-0 fees-card-fees-title text-capitalize">
              {t("deposit_fee")}
            </h5>
            <h3 className="fees-card-fees-body text-center">{fees}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}
