import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";
import Head from "next/head";

export default function Terms() {
  const { t } = useTranslation(["terms"]);
  return (
    <StaticLayout title={t("terms_title")} subtitle={t("terms_subtitle")}>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("otix_exchange_terms_of_use")} />
          <article>
            <p className="terms-content">
              {t("otix_exchange_UAB_is_a_full_service")}
            </p>
            <p className="terms-content">
              {t("you_agree_and_understand_that_by_using_our_website")}
            </p>
            <p className="terms-content">
              {t("These_terms_and_conditions_are_made_up_of_the_main_body")}
            </p>
            <p className="terms-content">
              {t("these_terms_contain_important_provisions")}
            </p>
            <Listing
              translation={"terms"}
              list={[
                "the_trading_or_holding_of_coins",
                "you_shall_assume_all_risks_related_to_the_use_of_services",
                "we_shall_under_no_circumstances",
              ]}
            />
            <p className="terms-content">
              {t(
                "the_company_website_offers_online_transaction_and_platform_services"
              )}
            </p>
            <p className="terms-content">
              {t("by_clicking_the_i_agree_button_on_the_companys_user")}
            </p>
            <ContainerInner>
              <InnerTitle title={t("eligibility")} sub />
              <p className="terms-content">
                {t("using_our_websites_or_accessing_our_services")}
              </p>
              <Listing
                translation={"terms"}
                list={[
                  "are_of_legal_age",
                  "have_not_previously_been_suspended",
                  "have_full_capacity_and_authority",
                ]}
              />
              <p className="terms-content">
                {t(
                  "if_you_register_to_use_the_services_on_behalf_of_a_legal_fiction"
                )}
              </p>
              <p className="terms-content">
                {t("in_any_way_the_following_must_be_observed")}:
              </p>
              <Listing
                translation={"terms"}
                list={[
                  "it_is_your_duty_to_make_sure_that_your_use",
                  "if_the_content_of_the_terms_is_prohibited",
                  "you_must_submit_accurate",
                  "we_have_the_right",
                  "you_understand_that_we_reserve_the_right_to_limit_the_availability",
                  "you_must_submit_accurate",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("general_obligations")} sub />
              <InnerTitle title={t("account")} sub sub2 />
              <p className="terms-content">
                {t(
                  "in_order_to_website_you_need_to_register_an_account_and_provide_us_with_all_the_required_information"
                )}
              </p>
              <p className="terms-content">
                {t("you_must_agree_to_the_following_terms")}
              </p>
              <Listing
                translation={"terms"}
                list={[
                  "create_a_strong_password",
                  "keep_your_account_secure_by_safeguarding",
                ]}
              />
              <p className="terms-content">
                {t("you_permit_us_to_conduct_any_required_investigations")}
              </p>
              <InnerTitle title={t("know_your_customer")} sub sub2 />

              <p className="terms-content">
                {t("KYC_refers_to_the_know_your_customer_process_implemented")}
              </p>
              <p className="terms-content">
                {t("the_third_party_conducts_client")}
              </p>
              <p className="terms-content">
                {t("content_of_our_know_your_customer")}:
              </p>
              <Listing
                translation={"terms"}
                list={[
                  "party_promulgate_and_update",
                  "party_promulgate_and_update_some_of_the_guidelines",
                  "party_design_and_complete_the_procedures",
                  "to_carry_out_due_diligence_and_continuous_supervision",
                ]}
              />
              <InnerTitle title={t("cancellations")} sub sub2 />

              <p className="terms-content">
                {t("you_may_not_amend_withdraw_or_cancel_your_authorization")}:
              </p>
              <InnerTitle title={t("warranties")} sub sub2 />

              <p className="terms-content">
                {t(
                  "the_warranties_and_commitments_outlined_in_these_terms_are_the_only_warranties"
                )}
                :
              </p>
              <InnerTitle title={t("taxes")} sub sub2 />

              <p className="terms-content">
                {t("you_are_responsible_for_determining_whether_taxes")}:
              </p>
              <InnerTitle title={t("termination_and_suspend")} sub sub2 />

              <Listing
                translation={"terms"}
                list={[
                  "we_reserve_the_right_to_suspend_or_terminate_your_account_or_use_of_the_service",
                  "if_you_do_not_meet_the_registration_qualifications_outlined_in_these_terms",
                  "if_it_is_discovered_that_the_person_using_an_account_was_not_the_original",
                  "we_may_take_any_action_we_deem_necessary_and_reasonable_in_our_sole_discretion",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("services")} sub />
              <InnerTitle title={t("exchange")} sub sub2 />
              <Listing
                translation={"terms"}
                list={[
                  "the_exchange_rate_for_the_specific_transaction_will_also_apply_to_any_buy_or_sale",
                  "company_reserves_the_right_to_accept_or_reject_the_user_trade_request_at_its_sole_discretion",
                  "depending_on_the_state_of_the_market_and_other_variables_at_the_time",
                ]}
              />
              <InnerTitle title={t("buy_and_sell")} sub sub2 />

              <p className="terms-content">
                {t("the_company_provides_sell_buy_trading_services_online")}
              </p>
              <InnerTitle title={t("fee_schedule")} sub sub2 />

              <p className="terms-content">
                {t(
                  "the_company_reserves_the_right_to_change_the_fees_at_any_time"
                )}
              </p>
              <InnerTitle title={t("digital_asset_disclosure")} sub sub2 />

              <p className="terms-content">
                {t("digital_asset_are_provided_to_you_by_the_company")}
              </p>
              <Listing
                translation={"terms"}
                list={[
                  "this_service_allows_you_to_buy_and_sell_digital_assets_on_the_company_platform",
                  "you_agree_to_pay_any_and_all_relevant_fees_associated_with_the_transaction_by_starting_a_digital_asset_transaction",
                  "our_digital_asset_services_are_only_available_in_connection_with_those_digital_assets_that_company_supports",
                  "we_reserve_the_right_to_refuse_to_process_or_cancel_or_reverse",
                  "you_understand_the_risks_involved_with_the_transactions_involving",
                ]}
              />

              <InnerTitle title={t("APIs")} sub sub2 />

              <p className="terms-content">
                {t("the_company_offers_a_service_api")}
              </p>

              <InnerTitle title={t("affiliates")} sub sub2 />
              <InnerTitle title={t("fiat")} sub sub2 />
              <p className="terms-content m-0">
                {t("fiat_currency_Transactions")}
              </p>
              <p className="terms-content">
                {t(
                  "although_we_will_make_every_effort_to_send_digital_currency_to_you_as_soon_as_possible"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("security")} sub />

              <p className="terms-content m-0">
                {t(
                  "the_company_is_not_liable_for_any_damage_or_disruptions_caused_by_computer_viruses"
                )}
              </p>

              <p className="terms-content m-0">
                {t(
                  "if_you_have_any_concerns_about_the_legitimacy_of_any_contact_or_notice"
                )}
              </p>

              <p className="terms-content m-0">
                {t(
                  "you_are_responsible_for_keeping_the_electronic_device_from_which_you_access_company_services_safe"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "for_example_you_should_not_write_them_down_or_otherwise_make_them_visible_to_others"
                )}
              </p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("obligations_of_the_user")} sub />

              <Listing
                translation={"terms"}
                list={[
                  "you_may_not_use_the_site_to_disseminate_information_that_violates_policies",
                  "you_must_not_create_a_company_account_for_any_malicious_purpose",
                  "you_are_not_permitted_to_use_the_website_as_an_area",
                  "any_information_you_post_on_the_websites_in_any_form_must_adhere_to_good_practice_and_social_norms_and_must_not_violate_laws_and_regulations",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("rights_of_the_user")} sub />

              <Listing
                translation={"terms"}
                list={[
                  "if_you_decide_to_become_a_member_of",
                  "you__by_successfully_creating_an_account_and_receiving_a_username",
                  "you_can_reset_your_password_via_email_or_sms_sent_to_the_mobile_number_associated",
                  "you_have_the_ability_to_change_certain_aspects_of_your_account_information",
                  "you_have_the_right_to_participate_in_our_organized_or_provided_online_activities",
                  "you_have_the_right_to_use_related_services_provided_by",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("limitation_of_liability")} sub />
              <Listing
                translation={"terms"}
                list={[
                  "except_where_otherwise_required_by_law",
                  "in_the_event_of_a_mistake_whether_made_through_our_services",
                  "due_to_the_nature_and_specialty_of_the_internet_and_cyber_environment",
                  "we_have_the_right_but_not_the_obligation",
                  "we_reserve_the_right_to_change_the_fees_for_deposits",
                  "by_using_our_service_you_agree_to_pay_us_any_applicable_fees_and_authorize",
                  "no_warranties_otix_exchange_site_is_provided",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("disclaimer_of_damages")} sub />

              <p className="terms-content">
                {t("to_the_maximum_extent_permitted_by_applicable_law")}
              </p>
              <p className="terms-content m-0">{t("in_no_event_shall_we")}</p>
              <Listing
                translation={"terms"}
                list={[
                  "regardless_of_whether_we_were_informed",
                  "any_interruption_in_the_transmission_of_data",
                  "your_misunderstanding_of_the_services_that_we_provide",
                  "any_loss_or_damage_to_reputation_or_goodwill",
                  "any_indirect",
                  "we_make_no_warranties_or_commitments_in_connection",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle
                title={t(
                  "compliance_with_local_rules_and_anti_money_laundering_policies"
                )}
                sub
              />
              <Listing
                translation={"terms"}
                list={[
                  "it_is_the_users_responsibility_to_follow_local_laws_regarding_the_legal_use_of_company_services_in_their_jurisdiction",
                  "all_users_of_our_services_acknowledge_and_declare_that_their_funds_come_from_legal_sources_and_did_not_originate_from_illegal_activities",
                  "aml_policy_is_a_collection_of_rules_and_activities_designed_to_prevent_money_laundering",
                  "company_maintains_a_cooperative_stance_with_law_enforcement_authorities_worldwide_and_will_not_hesitate_to_seize",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("rule_of_law")} sub />
              <Listing
                translation={"terms"}
                list={[
                  "in_the_event_that_a_dispute_controversy_difference",
                  "if_the_dispute_is_not_resolved_within_the_specified_time",
                  "the_parties_further_agree_to_make_a_good_faith_effort_to_resolve_the_dispute_through_mediation_after_the_commencement_of_the_arbitration",
                ]}
              />
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("intellectual_property")} sub />
              <Listing
                translation={"terms"}
                list={[
                  "unless_otherwise_stated",
                  "we_thus_give_you_a_limited_revocable_nonexclusive",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("privacy_policy")} sub />
              <p className="terms-content">
                {t("this_privacy_policy_as_well_as")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("risks")} sub />
              <p className="terms-content">
                {t("each_company_service_comes_with_its_unique_set_of_risks")}
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
      "terms",
      "header",
      "footer",
      "global",
    ])),
  },
});
