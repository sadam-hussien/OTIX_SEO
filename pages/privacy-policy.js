import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function Privacy() {
  const {
    t,
    i18n: { language },
  } = useTranslation(["privacy"]);
  return (
    <StaticLayout title={t("privacy_title")} subtitle={t("privacy_subtitle")}>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("privacy_title")} translation="privacy" />
          <article>
            <p className="terms-content">
              {t("you_signify_acceptance_of_the_terms_of_this_privacy_policy")}
            </p>
            <p className="terms-content">
              {/* {t("the_company_is_committed_to_protecting_all_users")} */}
              {language === "en" && (
                <>
                  The Company is committed to protecting all users' privacy.
                  Before using or accessing websites operated by us including,
                  API located on{" "}
                  <a href="https://trade.otix.exchange/api/documentation">
                    https://trade.otix.exchange/api/documentation
                  </a>{" "}
                  and any services made available through the websites, any
                  associated mobile applications and APIs such as {" "}
                  <a href="www.otix.exchange">www.otix.exchange</a>
                </>
              )}
            </p>
            <p className="terms-content">
              {t(
                "the_company_is_authorized_and_regulated_by_the_financial_crime_investigation"
              )}
            </p>
            <p className="terms-content">
              {t("all_persons_who_access_our_website_are_considered_users")}
            </p>
            <p className="terms-content">
              {t(
                "to_supply_the_company_services_to_our_customers_and_potential_customers"
              )}
            </p>
            <p className="terms-content">
              {t(
                "this_privacy_policy_along_with_any_other_applicable_terms_of_business"
              )}
            </p>
            <p className="terms-content">
              {t("please_read_the_following_carefully_to_understand")}
            </p>
            <ContainerInner>
              <InnerTitle title={t("information_collection")} sub />
              <p className="terms-content">
                {t(
                  "the_company_may_collect_the_following_information_about_you"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "the_company_automatically_tractrackstain_information_about_the_company_users"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "please_be_cautious_while_publishing_personal_information_about_yourself"
                )}
              </p>
              <p className="terms-content">
                {t("the_company_gather_information_such_as")}
              </p>
              <p className="terms-content">
                {t(
                  "data_that_identifies_or_refers_to_an_identifiable_individual_is_often_considered_to_be_personal_information"
                )}
              </p>
              <p className="terms-content">
                {t("personal_data_that_we_collect")}
              </p>
              <Listing
                translation={"privacy"}
                list={[
                  "name_date_of_birth_and_address",
                  "contact_information_such_as_email_address",
                  "bank_account_details",
                ]}
              />
              <p className="terms-content">
                {t("the_company_may_receive_anonymized")}
              </p>
              <p className="terms-content">
                {t(
                  "credit_reference_agencies_do_not_give_us_any_personal_information_about_you"
                )}
                :
              </p>
              <p className="terms-content">
                {t(
                  "your_personal_information_will_be_collected_used_disclosed"
                )}
                :
              </p>
              <Listing
                translation={"privacy"}
                list={[
                  "a_copy_of_the_records_we_used_to_meet_our_clients",
                  "evidence_and_records_of_the_companys_dealings",
                ]}
              />
              <p className="terms-content">
                {t(
                  "the_company_will_deactivate_your_account_and_remove_your_personal_information"
                )}
                :
              </p>
              <InnerTitle title={t("data_processing_fundamentals")} sub sub2 />

              <Listing
                translation={"privacy"}
                list={[
                  "all_personal_data_is",
                  "fairly_and_lawfully_treated",
                  "processed_for_a_lawfully_defined_purpose",
                  "adequate_relevant_and_not_excessive",
                  "not_retained_for_longer_than_required",
                  "processed_in_compliance_with_the_individuals",
                  "secure",
                  "not_distributed_to_other_nations_unless_suitable_protection_is_provided",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("protection_of_personal_information")} sub />
              <p className="terms-content">
                {t(
                  "the_company_is_dedicated_to_taking_all_practical_precautions_to_protect_any_current_or_potential_customers"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "your_information_is_always_secure_with_us_because_we_have_put_the_right_organizational"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "personal_information_provided_by_you_when_opening_an_account"
                )}
              </p>
              <p className="terms-content">
                {t("the_company_gather_information_such_as")}
              </p>
              <p className="terms-content">
                {t("the_company_uses_adequate_physical")}
              </p>
              <p className="terms-content">{t("physical_safeguards")}</p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("legal_basis_for_handling_your_personal_information")}
                sub
              />
              <p className="terms-content">
                {t(
                  "when_the_company_offers_its_services_or_intenerates_you_about_them"
                )}
              </p>
              <p className="terms-content">{t("legal_obligation")}</p>
              <p className="terms-content">
                {t(
                  "when_the_company_seek_your_permission_to_process_your_personal_information_for_a_specific_reason_that_we_express_to_you"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "the_company_may_release_any_information_in_response_to_a_legal_request"
                )}
              </p>
              <p className="terms-content">
                {t("personal_data_may_include_information_stored_on_paper")}
              </p>
              <p className="terms-content">
                {t(
                  "the_personal_data_must_be_erased_for_compliance_with_a_legal_obligation"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("access_your_personal_information_to_the_third_party")}
                sub
              />
              <p className="terms-content">
                {t(
                  "the_company_will_not_disclose_any_of_its_client’s_confidential_information"
                )}
              </p>
              <p className="terms-content m-0">
                {t("required_to_do_so_by_any_applicable_laws")}
              </p>
              <Listing
                translation={"privacy"}
                list={[
                  "if_there_is_a_duty_to_disclose",
                  "if_our_legitimate_business_interests_require_disclosure",
                  "in_accordance_with_our_terms_of_service",
                  "at_your_request_or_with_your_consent",
                ]}
              />
              <p className="terms-content">
                {t(
                  "the_company_may_share_your_personal_information_with_the_following_parties"
                )}
              </p>
              <p className="terms-content">{t("for_business_reasons")}</p>
              <p className="terms-content">
                {t(
                  "if_the_company_discloses_your_personal_information_to_service_providers"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "the_company_demand_that_service_providers_and_business_partners"
                )}
              </p>
              <p className="terms-content">
                {t("the_company_has_no_control_over_these_third_parties")}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t(
                  "transfers_of_personal_information_outside_of_your_country"
                )}
                sub
              />
              <p className="terms-content">
                {t(
                  "by_using_our_services_you_consent_to_the_transfer_of_your_personal_information_to_other_countries"
                )}
              </p>
              <Listing
                translation={"privacy"}
                list={[
                  "by_accepting_the_terms_and_condition_and_privacy_policy_during_the_signup_the_user_already_agreed_to_the_transfer_of_data",
                  "if_user_has_any_issue",
                  "in_accordance_with_our_terms_of_service",
                  "at_your_request_or_with_your_consent",
                ]}
              />
              <p className="terms-content m-0">
                {t("we_require_express_authorization")}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("our_services_are_not_available_to_children")}
                sub
              />
              <p className="terms-content">
                {t(
                  "our_services_are_not_intended_for_people_under_the_age_of_18"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("cookies")} sub />
              <p className="terms-content">
                {t(
                  "cookies_are_little_pieces_of_code_that_assist_us_in_identifying_you_when_you_use_our_platform"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t("your_privacy_and_data_protection_rights")}
                sub
              />
              <p className="terms-content">
                {t("subject_to_current_legislation")}
              </p>
              <p className="terms-content">
                {t(
                  "furthermore_if_you_consent_to_our_processing_of_your_personal_information"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "you_have_the_right_of_access_to_receive_confirmation_that_your_personal_information"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "you_have_the_right_to_rectification_such_as_the_correction_or_addition"
                )}
              </p>
              <p className="terms-content">{t("in_some_instances")}</p>

              <p className="terms-content">
                {t(
                  "you_have_the_right_to_object_to_the_processing_of_your_personal_information"
                )}
              </p>
              <p className="terms-content">
                {t("you_have_the_right_to_restrict_processing")}
              </p>
              <p className="terms-content">
                {t("you_have_the_right_to_portability")}
              </p>
              <p className="terms-content">
                {t("you_have_the_right_to_withdraw_your_consent")}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("changes_to_this_privacy_policy")} sub />
              <p className="terms-content">
                {t("the_company_privacy_policy_is_reviewed_regularly")}
              </p>
              <p className="terms-content">
                {t(
                  "the_company_reserve_the_right_to_change_this_privacy_policy_at_any_time"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "after_creating_an_account_you_will_be_able_to_access_and_edit_your_information"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("contact")} sub />
              <p className="terms-content">
                {language === "en" && (
                  <>
                    If you have a privacy issue, a complaint, or a question for
                    the Data Protection Officer, please use the Contact form to
                    get in touch via email:{" "}
                    <a href="compliance@otix.exchange">
                      compliance@otix.exchange
                    </a>{" "}
                    We will react within 30 days to any inquiries or complaints
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
      "privacy",
      "header",
      "footer",
      "global",
    ])),
  },
});
