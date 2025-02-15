const submitButton= document.querySelector(".calculate-btn");

submitButton.addEventListener("click", mortgageCalculator);

function mortgageCalculator(){
if (mortgageAmount,mortgageTerm,interestRates){
const mortgageAmount= document.querySelector("#mortgage-amount").value;
const mortgageTerm = document.querySelector("#mortgage-term").value;
const interestRates = document.querySelector("#interest-rate").value;
const mortgageTermMonth = mortgageTerm * 12
const interestRatesMonth = (interestRates/100)/12
const firstValue= (Math.pow(interestRatesMonth+1,mortgageTermMonth) * interestRatesMonth)*mortgageAmount;
const secondValue=(Math.pow(interestRatesMonth+1,mortgageTermMonth))-1;
const finalValue=(firstValue/secondValue);
}

}
