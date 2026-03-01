import { Given, Then, When } from "@cucumber/cucumber";
import {
  paymentPlanPage,
  StartApplicationPage,
} from "../../globalPagesSetup.js";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";

Then(
  "the next button on payment plan page should be disabled by default",
  async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
  },
);

When("the user selects a payment plan", async function () {
  await paymentPlanPage.selectPaymentPlan("upfront");
});

Then("the Next button should become active", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeVisible();
  await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

Then("the steps2 stepper should be blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

When("the user clicks the next button on payment plan page", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the steps1 stepper should be green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the steps2 stepper should be green", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the step3 stepper should be blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

Then("the upfront payment plan summary should be displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();
});

When("the user selects Installments payment plan", async function () {
  await paymentPlanPage.selectPaymentPlan("installments");
});

Then("the installement plan summary should be displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
  await expect(
    paymentPlanPage.installmentsNumberUnderInstallments,
  ).toBeVisible();
  await expect(
    paymentPlanPage.pricePerInstallmentsAmountUnderInstallments,
  ).toBeVisible();
  await expect(
    paymentPlanPage.firstMonthPaymentAmountUnderInstallments,
  ).toBeVisible();
});

Then("the back button is disabled", async function () {
  await expect(paymentPlanPage.backButton).toBeVisible();
  await expect(paymentPlanPage.backButton).toBeEnabled();
});

When("the user clicks the back button", async function () {
  await paymentPlanPage.backButton.click();
});

Then("the steps1 stepper should be blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});