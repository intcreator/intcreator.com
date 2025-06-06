import { PolymerElement, html } from "../@polymer/polymer/polymer-element.js";

import "../@polymer/app-route/app-location.js";
import "../@polymer/app-route/app-route.js";
import "../@polymer/iron-pages/iron-pages.js";
import "../@polymer/iron-input/iron-input.js";
import "../@polymer/iron-icons/iron-icons.js";
import "../@polymer/paper-tabs/paper-tabs.js";
import "../styles/int-styles.js";
import { GestureEventListeners } from "../@polymer/polymer/lib/mixins/gesture-event-listeners.js";

class SomedayCalc extends GestureEventListeners(PolymerElement) {
    static get template() {
        return html`
            <style include="int-styles">
                :host {
                    min-height: 100vh;
                    background: url("./places/beach-house.jpg");
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                iron-pages {
                    width: 100%;
                }

                paper-tabs,
                .tab-section--page {
                    width: 100%;
                    max-width: 800px;
                    margin: auto;
                    background-color: rgba(0, 0, 0, 0.7);
                }

                .tab-section {
                    padding: 30px;
                    width: calc(100% - 60px);
                    max-width: 740px;
                    height: calc(100vh - 108px);
                    overflow: auto;
                }

                #someday {
                    display: flex;
                    align-items: center;
                }

                .cta-box {
                    width: 50%;
                    padding: 30px;
                }

                .entry {
                    display: flex;
                }

                .entry > * {
                    flex-basis: 50%;
                }

                .form-row {
                    width: 100%;
                    display: flex;
                    align-items: center;
                }

                .form-row > * {
                    flex-basis: 50%;
                }

                .form-row input {
                    align-self: center;
                }

                .form-row > * + * {
                    margin-left: 20px;
                }

                .future-home-location {
                    word-wrap: break-word;
                }

                .delete-icon {
                    cursor: pointer;
                }
            </style>

            <app-location route="{{route}}"></app-location>
            <app-route
                route="{{route}}"
                pattern="/portfolio/someday-calc/:tab"
                active="{{active}}"
                data="{{data}}"
            ></app-route>

            <paper-tabs selected="{{data.tab}}" attr-for-selected="tab" noink>
                <paper-tab tab="">Someday</paper-tab>
                <paper-tab tab="add">Add</paper-tab>
                <paper-tab tab="history">History</paper-tab>
                <paper-tab tab="estimations">Estimations</paper-tab>
                <paper-tab tab="settings">Settings</paper-tab>
            </paper-tabs>

            <iron-pages selected="[[data.tab]]" attr-for-selected="tab">
                <section id="someday" class="tab-section" tab="">
                    <div class="cta-box">
                        <h1>Live here.</h1>
                        <a class="int-button" href="add"
                            >Add $[[defaultAmountToAdd]] to savings</a
                        >
                    </div>
                </section>
                <section class="tab-section tab-section--page" tab="add">
                    <h1>Add</h1>
                    <div hidden="[[justAddedToSavings]]">
                        <p>
                            <label for="add-to-savings"
                                >Amount to add ($):</label
                            >
                        </p>
                        <p>
                            $
                            <iron-input bind-value="{{amountToAdd}}">
                                <input
                                    id="add-to-savings"
                                    allowed-pattern="[0-9]|."
                                    value="{{amountToAdd::input}}"
                                />
                            </iron-input>
                        </p>
                        <h2>
                            Add $[[computeAmountToAdd(amountToAdd)]] to savings
                        </h2>
                        <button class="int-button" on-tap="addToSavings">
                            Add
                        </button>
                    </div>
                    <div hidden="[[!justAddedToSavings]]">
                        <h2>
                            $[[computeAmountToAdd(amountToAdd)]] was added to
                            savings!
                        </h2>
                        <p>
                            So far you have added a total of
                            $[[totalAppSavings]] to your savings
                        </p>
                        <a class="int-button" href="./history">Go to history</a>
                        <button class="int-button" on-tap="resetAddTab">
                            Add more
                        </button>
                    </div>
                </section>
                <section class="tab-section tab-section--page" tab="history">
                    <h1>History</h1>
                    <h2>Total contributions: $[[totalAppSavings]]</h2>
                    <h2 hidden$="[[!hasHistory(savingsContributions.length)]]">
                        No history yet!
                    </h2>
                    <a class="int-button" href="add">Add to savings</a>
                    <template
                        is="dom-repeat"
                        items="[[savingsContributions]]"
                        as="entry"
                    >
                        <p class="entry">
                            <span class="entry-date"
                                >[[formatDate(entry.date)]]</span
                            >
                            <span class="entry-amount">$[[entry.amount]]</span>
                        </p>
                    </template>
                </section>
                <section
                    class="tab-section tab-section--page"
                    tab="estimations"
                >
                    <h1>Estimations</h1>
                    <p class="form-row">
                        <label for="money-in-savings"
                            >Starting savings ($):</label
                        >
                        <iron-input bind-value="{{moneyInSavings}}">
                            <input
                                id="money-in-savings"
                                placeholder="Ex: 10000"
                                prevent-invalid-input
                                allowed-pattern="[0-9]|."
                                value="{{moneyInSavings}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <span>Savings added with this app:</span>
                        <span>$[[totalAppSavings]]</span>
                    </p>
                    <p class="form-row">
                        <label for="years-to-retirement"
                            >Years before I retire:</label
                        >
                        <iron-input bind-value="{{yearsToRetirement}}">
                            <input
                                id="years-to-retirement"
                                placeholder="Ex: 35"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{yearsToRetirement}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <label for="investment-growth-rate"
                            >Savings interest rate (%):</label
                        >
                        <iron-input bind-value="{{investmentGrowthRate}}">
                            <input
                                id="investment-growth-rate"
                                placeholder="Ex: 5"
                                prevent-invalid-input
                                allowed-pattern="[0-9]|."
                                value="{{investmentGrowthRate}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <label for="inflation-rate"
                            >Average inflation rate (%):</label
                        >
                        <iron-input bind-value="{{inflationRate}}">
                            <input
                                id="inflation-rate"
                                placeholder="Ex: 2"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{inflationRate}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <label for="savings-per-month"
                            >Monthly savings contribution ($):</label
                        >
                        <iron-input bind-value="{{savingsPerMonth}}">
                            <input
                                id="savings-per-month"
                                placeholder="Ex: 1500"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{savingsPerMonth}}"
                            />
                        </iron-input>
                    </p>
                    <h2>Retirement Fund: $[[retirementFund]]</h2>
                    <p>
                        This is about how much money you'll have when you
                        retire. Note: this assumes deposits are made at the end
                        of the month and interest is compounded monthly.
                    </p>
                    <h2>Reality Check</h2>
                    <p class="form-row">
                        <label for="retirement-monthly-expenditures"
                            >Monthly retirement expenses ($):</label
                        >
                        <iron-input
                            bind-value="{{retirementMonthlyExpenditures}}"
                        >
                            <input
                                id="retirement-monthly-expenditures"
                                placeholder="Ex: 10000"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{retirementMonthlyExpenditures}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <label for="social-security"
                            >Monthly Social Security income ($):</label
                        >
                        <iron-input bind-value="{{socialSecurity}}">
                            <input
                                id="social-security"
                                placeholder="Ex: 400"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{socialSecurity}}"
                            />
                        </iron-input>
                    </p>
                    <p class="form-row">
                        <label for="expected-use"
                            >How many years I will need the money for:</label
                        >
                        <iron-input bind-value="{{expectedUsageYears}}">
                            <input
                                id="expected-use"
                                placeholder="Ex: 25"
                                prevent-invalid-input
                                allowed-pattern="[0-9]"
                                value="{{expectedUsageYears}}"
                            />
                        </iron-input>
                    </p>
                    <h2>
                        You will have about $[[realityCheck]] left over per
                        month
                    </h2>
                </section>
                <section class="tab-section tab-section--page" tab="settings">
                    <h1>Settings</h1>
                    <p>All changes are saved immediately.</p>
                    <h2>Default Amount to Add: $[[defaultAmountToAdd]]</h2>
                    <p>
                        Change ($):
                        <iron-input bind-value="{{defaultAmountToAdd}}">
                            <input
                                placeholder="Ex: 12"
                                prevent-invalid-input
                                allowed-pattern="[0-9]|."
                                value="{{defaultAmountToAdd}}"
                                on-blur="validateDefaultAmountToAdd"
                            />
                        </iron-input>
                    </p>
                    <p>
                        Presets:
                        <button
                            class="int-button"
                            on-tap="setDefaultAmountToAdd"
                            amount="1"
                        >
                            $1
                        </button>
                        <button
                            class="int-button"
                            on-tap="setDefaultAmountToAdd"
                            amount="2"
                        >
                            $2
                        </button>
                        <button
                            class="int-button"
                            on-tap="setDefaultAmountToAdd"
                            amount="5"
                        >
                            $5
                        </button>
                        <button
                            class="int-button"
                            on-tap="setDefaultAmountToAdd"
                            amount="10"
                        >
                            $10
                        </button>
                        <button
                            class="int-button"
                            on-tap="setDefaultAmountToAdd"
                            amount="15"
                        >
                            $15
                        </button>
                    </p>
                    <h2>Future home locations</h2>
                    <template
                        is="dom-repeat"
                        items="[[locations]]"
                        as="location"
                    >
                        <p class="future-home-location">
                            [[location]]
                            <iron-icon
                                class="delete-icon"
                                icon="clear"
                                index="[[index]]"
                                on-tap="removeLocation"
                            ></iron-icon>
                        </p>
                    </template>
                    <p>
                        <iron-input bind-value="{{myLocation}}">
                            <input
                                id="location-input"
                                value="{{myLocation}}"
                                on-keypress="addLocationEnter"
                            />
                            <button class="int-button" on-tap="addLocation">
                                Add
                            </button>
                        </iron-input>
                    </p>
                </section>
            </iron-pages>
        `;
    }

    static get properties() {
        return {
            defaultAmountToAdd: {
                type: Number,
                value: 5,
            },
            amountToAdd: {
                type: Number,
                value: 5,
            },
            savingsContributions: {
                type: Array,
                value: [],
            },
            totalAppSavings: {
                type: Number,
                computed:
                    "computeTotalAppSavings(savingsContributions, savingsContributions.length)",
            },
            retirementFund: {
                type: Number,
                value: 0,
                computed:
                    "computeRetirementFund( moneyInSavings, \
                            totalAppSavings, \
                            yearsToRetirement, \
                            investmentGrowthRate, \
                            inflationRate, \
                            savingsPerMonth)",
            },
            realityCheck: {
                type: Number,
                value: 0,
                computed:
                    "computeRealityCheck( retirementFund, \
                            retirementMonthlyExpenditures, \
                            socialSecurity, \
                            inflationRate, \
                            expectedUsageYears)",
            },
            locations: {
                type: Array,
                value: [],
            },
        };
    }

    static get observers() {
        return [
            "updateAmountToAdd(defaultAmountToAdd, data.tab)",
            "resetAddTab(data.tab)",
        ];
    }

    computeAmountToAdd(amountToAdd) {
        if (!parseFloat(amountToAdd)) return 0;
        else return parseFloat(amountToAdd).toFixed(2);
    }

    addToSavings(e) {
        const amount = this.computeAmountToAdd(this.amountToAdd);
        if (amount == 0) return;
        else {
            this.unshift("savingsContributions", {
                date: Date.now(),
                amount: amount,
            });
            this.set("justAddedToSavings", true);
        }
    }

    resetAddTab(tab) {
        this.set("justAddedToSavings", false);
    }

    hasHistory(historyLength) {
        return historyLength ? false : true;
    }

    computeTotalAppSavings(savingsContributions, length) {
        let total = 0;
        for (let i = 0; i < savingsContributions.length; i++) {
            total += parseFloat(savingsContributions[i].amount);
        }
        return total.toFixed(2);
    }

    formatDate(rawDate) {
        return new Date(rawDate).toLocaleString();
    }

    computeRetirementFund(
        moneyInSavings,
        totalAppSavings,
        yearsToRetirement,
        investmentGrowthRate,
        inflationRate,
        savingsPerMonth
    ) {
        if (!moneyInSavings || !totalAppSavings) return (0).toFixed(2);
        if (!yearsToRetirement || !investmentGrowthRate || !inflationRate)
            return (
                parseFloat(moneyInSavings) + parseFloat(totalAppSavings)
            ).toFixed(2);
        const actualGrowthRate =
            parseFloat(investmentGrowthRate) - parseFloat(inflationRate);
        const interestRatio = actualGrowthRate / 100 / 12;
        const interestMultiplier = Math.pow(
            1 + interestRatio,
            12 * yearsToRetirement
        );
        const principalCompoundInterest =
            parseFloat(moneyInSavings) * interestMultiplier;
        let fund = principalCompoundInterest;
        if (!savingsPerMonth) return fund.toFixed(2);
        const futureValueOfSeries =
            parseFloat(savingsPerMonth) *
            ((interestMultiplier - 1) / interestRatio);
        fund = principalCompoundInterest + futureValueOfSeries;
        if (!fund) return (0).toFixed(2);
        return fund.toFixed(2);
    }

    computeRealityCheck(
        retirementFund,
        retirementMonthlyExpenditures,
        socialSecurity,
        inflationRate,
        expectedUsageYears
    ) {
        if (!expectedUsageYears) return parseFloat(0).toFixed(2);
        const monthlyAllowance = retirementFund / (expectedUsageYears * 12);
        return (
            parseFloat(monthlyAllowance) +
            parseFloat(socialSecurity) -
            parseFloat(retirementMonthlyExpenditures)
        ).toFixed(2);
    }

    validateDefaultAmountToAdd(e) {
        this.set(
            "defaultAmountToAdd",
            parseFloat(this.defaultAmountToAdd)
                ? parseFloat(this.defaultAmountToAdd).toFixed(2)
                : 0
        );
        // ADD FIELD VALIDATOR (POLYMER)
    }

    setDefaultAmountToAdd(e) {
        this.set("defaultAmountToAdd", e.target.getAttribute("amount"));
        this.validateDefaultAmountToAdd();
    }

    updateAmountToAdd(defaultAmountToAdd, tab) {
        this.set("amountToAdd", defaultAmountToAdd);
    }

    addLocation(e) {
        if (!this.myLocation) return;
        this.push("locations", this.myLocation);
        this.set("myLocation", "");
        this.querySelector("#location-input").focus();
    }

    addLocationEnter(e) {
        if (e.charCode === 13) this.addLocation();
    }

    removeLocation(e) {
        this.splice("locations", e.target.index, 1);
    }
}

customElements.define("someday-calc", SomedayCalc);
