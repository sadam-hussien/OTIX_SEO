import { Title } from "components";
import { Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import LiteSection from "./LiteSection";

export default function ProductsSection() {
  const { t } = useTranslation(["home"]);

  return (
    <Container className="products_section pt pb mt-5">
      <Title title={t("products_title")} subtitle={t("products_subTitle")} />
      <LiteSection />
      <LiteSection reverseRow="flex-row-reverse" />
    </Container>
  );
}
