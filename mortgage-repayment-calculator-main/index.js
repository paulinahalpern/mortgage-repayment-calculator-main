const submitButton= document.querySelector(".calculate-btn");
const clearBtn= document.querySelector("btn-clear");


submitButton.addEventListener("click", mortgageCalculator);

function mortgageCalculator(){
const mortgageAmount= document.querySelector("#mortgage-amount").value;
const mortgageTerm = document.querySelector("#mortgage-term").value;
const interestRates = document.querySelector("#interest-rate").value;
let repaymentValue= document.querySelector("#repayment-value");
let totalAmountRepay= document.querySelector("#amount-to-repay");
let emptyResult = document.querySelector(".empty-result-page");
let activeResult= document.querySelector(".complete-result-page");
// Validation form
// ErrorMessages
let errorMessage= document.querySelector(".error1");
let errorMessage2= document.querySelector(".error2");
let errorMessage3= document.querySelector(".error3");
let isValid = true;

if (!mortgageAmount){
 errorMessage.innerHTML = "This field is required";
 isValid=false;
} else {
    errorMessage.innerHTML="";
}
if (!mortgageTerm){
    errorMessage2.innerHTML= "This field is required";
    isValid=false;
}else{
    errorMessage2.innerHTML="";
}
if (!interestRates){
    errorMessage3.innerHTML= "This field is required";
    isValid=false;
}else{
    errorMessage3.innerHTML="";
}
if (!isValid) return false;

if (mortgageAmount,mortgageTerm,interestRates){
// Monthly Repayment
const mortgageTermMonth = mortgageTerm * 12
const interestRatesMonth = (interestRates/100)/12
const firstValue= (Math.pow(interestRatesMonth+1,mortgageTermMonth) * interestRatesMonth)*mortgageAmount;
const secondValue=(Math.pow(interestRatesMonth+1,mortgageTermMonth))-1;
const finalValue=(firstValue/secondValue);
repaymentValue.innerHTML = parseFloat(finalValue).toFixed(2);
// Total to repay
const totalToRepay = finalValue * mortgageTermMonth
totalAmountRepay.innerHTML = parseFloat(totalToRepay).toFixed(2);

emptyResult.classList.toggle("hidden")
activeResult.classList.toggle("active")
}
}
