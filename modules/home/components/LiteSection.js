import { Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { Btn } from "components";

export default function LiteSection({ reverseRow }) {
  const { t } = useTranslation(["home"]);

  return (
    <Row
      className={`${reverseRow} mb-5 justify-content-between align-items-center`}
    >
      <div className="col-md-6">
        <img
          src="https://bitoasis.net/en/assets/images/home/bitoasis-core.jpg"
          className="img-fluid h-200"
          alt=""
        />
      </div>
      <div className="col-md-5">
        <div className="d-block align-items-start">
          <h5>{t("otix_Lite")}</h5>
          <p>{t("products_details")}</p>
          <p>{t("products_details2")}</p>
          <div className="d-flex mt-5" style={{ gap: 20 }}>
            <Btn
              name={t("Learn_More")}
              classes="flex-fill"
              style={{ maxWidth: 200 }}
            />
            <Btn
              name={t("Start_Now")}
              classes="flex-fill"
              style={{
                backgroundColor: "transparent",
                maxWidth: 200,
                color: "var(--dark)",
                borderColor: "var(--dark)",
              }}
            />
          </div>
        </div>
      </div>
    </Row>
  );
}
