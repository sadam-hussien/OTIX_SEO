import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing } from "components";
import Head from "next/head";

export default function RiskWarning() {
  const { t } = useTranslation(["risk"]);
  return (
    <StaticLayout title={t("risk_warning")}>
      <Head>
        <title>Risk Warning</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("risk_warning")} />
          <article>
            <Listing
              translation={"risk"}
              list={[
                "you_signify_acceptance_of_the_terms_of_this_privacy_policy",
                "any_trade_can_be_financially_high_risk",
                "you_conduct_your_analysis_and_research",
                "you_agree_to_assume_any_risks_related_to_or_connected_with_sending",
                "the_company_cannot_remove_all_security_concerns",
                "on_trading_risk_we_do_not_offer_advice",
                "you_will_not_have_any_access_to_the_company",
                "the_company_reserve_the_right_to_correct",
                "acceptance_of_risk_you_understand_and_agree_that_using_and_using_the_services",
                "the_company_may_use_third_party_asset_custody",
              ]}
            />
          </article>
        </Container>
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "risk",
      "header",
      "footer",
      "global",
    ])),
  },
});
