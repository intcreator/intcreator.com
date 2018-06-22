/* <link rel="import" href="../../bower_components/no-ie/no-ie.html"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '../../../../@polymer/polymer/polymer-element.js';

import '../../../../@polymer/app-route/app-location.js';
import '../../../../@polymer/app-route/app-route.js';
import '../../../../@polymer/iron-pages/iron-pages.js';
import '../../../../@polymer/iron-input/iron-input.js';
import '../../../../@polymer/iron-icons/iron-icons.js';
import '../../../../@polymer/paper-tabs/paper-tabs.js';
import '/styles/int-styles.js';
import { GestureEventListeners } from '../../../../@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class SomedayCalc extends GestureEventListeners(PolymerElement) {

    static get is() { return 'someday-calc' }

    static get properties() {
				return {
            defaultAmountToAdd: {
                type: Number,
                value: 5
            },
            amountToAdd: {
                type: Number,
                value: 5
            },
            savingsContributions: {
                type: Array,
                value: []
            },
            totalAppSavings: {
                type: Number,
                computed: 'computeTotalAppSavings(savingsContributions, savingsContributions.length)'
            },
            retirementFund: {
                type: Number,
                value: 0,
                computed: 'computeRetirementFund( moneyInSavings, \
                                                                                    totalAppSavings, \
                                                                                    yearsToRetirement, \
                                                                                    investmentGrowthRate, \
                                                                                    inflationRate, \
                                                                                    savingsPerMonth)'
            },
            realityCheck: {
                type: Number,
                value: 0,
                computed: 'computeRealityCheck( retirementFund, \
                                                                                retirementMonthlyExpenditures, \
                                                                                socialSecurity, \
                                                                                inflationRate, \
                                                                                expectedUsageYears)'
            },
            locations: {
                type: Array,
                value: []
            }
				}
    }

    static get observers() {
				return [
            'updateAmountToAdd(defaultAmountToAdd, data.tab)',
            'resetAddTab(data.tab)'
				]
    }

computeAmountToAdd(amountToAdd) {
if(!parseFloat(amountToAdd)) return 0;
else return parseFloat(amountToAdd).toFixed(2);
}

addToSavings(e) {
const amount = this.computeAmountToAdd(this.amountToAdd);
if(amount == 0) return;
else {
  this.unshift('savingsContributions', {
    date: Date.now(),
    amount: amount
  })
  this.set('justAddedToSavings', true);
}
}

resetAddTab(tab) {
this.set('justAddedToSavings', false);
}

hasHistory(historyLength) {
return historyLength ? false : true;
}

computeTotalAppSavings(savingsContributions, length) {
const total = 0;
for (const i = 0; i < savingsContributions.length; i++) {
  total += parseFloat(savingsContributions[i].amount);
}
return total.toFixed(2);
}

formatDate(rawDate) {
return new Date(rawDate).toLocaleString();
}

computeRetirementFund(  moneyInSavings,
                                totalAppSavings,
                                yearsToRetirement,
                                investmentGrowthRate,
                                inflationRate,
                                savingsPerMonth) {
if(!moneyInSavings || !totalAppSavings) return (0).toFixed(2);
if(!yearsToRetirement || !investmentGrowthRate || !inflationRate) return (parseFloat(moneyInSavings) + parseFloat(totalAppSavings)).toFixed(2);
const actualGrowthRate = parseFloat(investmentGrowthRate) - parseFloat(inflationRate);
const interestRatio = (actualGrowthRate / 100) / 12;
const interestMultiplier = Math.pow((1 + interestRatio), (12 * yearsToRetirement))
const principalCompoundInterest = parseFloat(moneyInSavings) * interestMultiplier;
let fund = principalCompoundInterest;
if(!savingsPerMonth) return fund.toFixed(2);
const futureValueOfSeries = parseFloat(savingsPerMonth) * ((interestMultiplier - 1) / interestRatio)
fund = principalCompoundInterest + futureValueOfSeries;
if(!fund) return (0).toFixed(2);
return fund.toFixed(2);
}

computeRealityCheck(  retirementFund,
                              retirementMonthlyExpenditures,
                              socialSecurity,
                              inflationRate,
                              expectedUsageYears) {
if(!expectedUsageYears) return parseFloat(0).toFixed(2);
const monthlyAllowance = retirementFund / (expectedUsageYears * 12);
return (parseFloat(monthlyAllowance) + parseFloat(socialSecurity) - parseFloat(retirementMonthlyExpenditures)).toFixed(2);
}

validateDefaultAmountToAdd(e) {
this.set('defaultAmountToAdd', parseFloat(this.defaultAmountToAdd) ? parseFloat(this.defaultAmountToAdd).toFixed(2) : 0);




// ADD FIELD VALIDATOR (POLYMER)
}

setDefaultAmountToAdd(e) {
this.set('defaultAmountToAdd', e.target.getAttribute('amount'));
this.validateDefaultAmountToAdd();
}

updateAmountToAdd(defaultAmountToAdd, tab) {
this.set('amountToAdd', defaultAmountToAdd);
}

addLocation(e) {
if(!this.myLocation) return;
this.push('locations', this.myLocation);
this.set('myLocation', '');
this.querySelector('#location-input').focus();
}

addLocationEnter(e) {
if(e.charCode === 13) this.addLocation();
}

removeLocation(e) {
this.splice('locations', e.target.index, 1);
}

}

customElements.define(SomedayCalc.is, SomedayCalc);
