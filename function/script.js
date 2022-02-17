// calculating Part**************

let foodCost = document.getElementById("food-input");
    
let rentCost = document.getElementById("rent-input");

let clothCost = document.getElementById("cloth-input");

let totalCost = document.getElementById("total-expenses");

let totalIncome = document.getElementById("income-input");

let getBalance = document.getElementById("get-balance");

// saving part**************

let percentagIput = document.getElementById("save-input");

let saveAmount = document.getElementById("save-amount")

let remainBalance = document.getElementById("remaining")


function calculation(){
    
    let totalExpenses = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothCost.value);
    
    totalCost.innerText = totalExpenses;

   let balanced = parseFloat(totalIncome.value) - parseFloat(totalExpenses);
   
   getBalance.innerText = balanced;
   
}


function saveButton(){
    
    let totalExpenses = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothCost.value);
    
    totalCost.innerText = totalExpenses;

   let balanced = parseFloat(totalIncome.value) - parseFloat(totalExpenses);

   getBalance.innerText = balanced;

    let getPercentagAmount = (parseFloat(getBalance.innerText) * parseFloat(percentagIput.value))/100 ;

     saveAmount.innerText = getPercentagAmount

     let remainingBalance = (parseFloat(getBalance.innerText) - parseFloat(saveAmount.innerText))

     remainBalance.innerText = remainingBalance


    foodCost.value = ' ';
    rentCost.value = ' ';
   clothCost.value = ' ';
   totalIncome.value = ' ';
   percentagIput.value = '';
}
   
