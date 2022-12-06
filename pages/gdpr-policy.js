import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { ContainerInner, InnerTitle, Listing } from "components";

import Head from "next/head";

export default function Gdpr() {
  const {
    t,
    i18n: { language },
  } = useTranslation(["gdpr"]);
  return (
    <StaticLayout title={t("gdpr")}>
      <Head>
        <title>GPDR Policy</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("gdpr")} />
          <article>
            <p className="terms-content">
              {t("by_accessing_our_website_or_using_our_services")}
            </p>
            <InnerTitle
              title={t("an_overview_of_how_we_collect_and_utilize_your_data")}
              sub
              sub2
            />

            <Listing
              translation={"gdpr"}
              list={[
                "information_we_collect_about_you",
                "how_do_we_collect_it",
                "we_may_share_it_with_third_parties",
                "how_we_keep_it_secure",
                "your_rights",
              ]}
            />

            <ContainerInner>
              <InnerTitle title={t("information_collection")} sub />
              <p className="terms-content m-0">
                {t(
                  "the_company_may_get_information_about_you_from_a_variety_of_sources"
                )}
              </p>

              <Listing
                translation={"gdpr"}
                list={[
                  "directly_from_you",
                  "from_a_third_party",
                  "from_publicly_available_sources",
                  "when_we_generate_it_ourselves",
                  "from_other_organizations",
                ]}
              />
              <p className="terms-content">
                {t(
                  "the_company_will_only_collect_your_information_in_accordance_with_applicable_rules_and_laws"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("using_of_personal_information")} sub />
              <p className="terms-content m-0">
                {t(
                  "the_company_will_use_it_to_provide_the_services_you_have_requested_and_for_other_purposes"
                )}
              </p>

              <Listing
                translation={"gdpr"}
                list={[
                  "confirm_your_identity_and_address",
                  "understanding_how_you_use_your_accounts",
                  "carrying_out_your_instructions",
                  "improving_our_services",
                  "offering_you_other_services_we_believe_may_benefit_you_unless_you_tell_us_not_to",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("access_your_personal_information_to_the_third_party")}
                sub
              />
              <p className="terms-content">
                {t(
                  "the_company_may_share_your_information_with_other_members_of_the_group_as_well_as_subcontractors"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("how_long_we_will_keep_your_information")}
                sub
              />
              <p className="terms-content">
                {t(
                  "the_company_will_keep_your_information_for_as_long_as_you_have_a_connection_with_us"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("transferring_your_data_to_an_outside_country")}
                sub
              />
              <p className="terms-content">
                {t(
                  "your_information_may_be_transferred_and_stored_in_countries"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("your_privacy_and_data_protection_rights")}
                sub
              />
              <p className="terms-content m-0">
                {t("you_have_several_rights_regarding_your_information")}
              </p>

              <Listing
                translation={"gdpr"}
                list={[
                  "the_ability_to_see_what_we_have",
                  "the_ability_to_request_that_we_share_it_with_another_party",
                  "the_ability_to_request_that_we_update_incorrect_or_incomplete_details",
                  "the_ability_to_object_to_or_restrict_the_processing_of_such_data",
                  "the_ability_to_file_a_complaint",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("more_information")} sub />
              <p className="terms-content m-0">
                {language === "en" && (
                  <>
                    If you want to know more about our Privacy Policy please
                    check our full Privacy Policy, at
                    <a href="www.otix.exchange/gdprpolicy">
                      www.otix.exchange/gdprpolicy
                    </a>
                  </>
                )}
              </p>
            </ContainerInner>
          </article>
        </Container>
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "gdpr",
      "header",
      "footer",
      "global",
    ])),
  },
});
