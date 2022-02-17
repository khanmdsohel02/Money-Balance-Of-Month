

function calculation(){
    let foodCost = document.getElementById("food-input").value;
    

    let rentCost = document.getElementById("rent-input").value;

    let clothCost = document.getElementById("cloth-input").value;

    let totalCost = document.getElementById("total-expenses");

    let totalIncome = document.getElementById("income-input").value;

   
    let getBalance = document.getElementById("get-balance");
    
    
    let totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    totalCost.innerText = totalExpenses;


   let balanced = parseFloat(totalIncome) - parseFloat(totalExpenses);

   getBalance.innerText = balanced;

   foodCost.value = ' ';
   rentCost.value = ' ';
   clothCost.value = ' ';
   totalIncome.value = ' ';
   
   
}


function saveButton(){
    let foodCost = document.getElementById("food-input").value;
    

    let rentCost = document.getElementById("rent-input").value;

    let clothCost = document.getElementById("cloth-input").value;

    let totalCost = document.getElementById("total-expenses");

    let totalIncome = document.getElementById("income-input").value;

   
    let getBalance = document.getElementById("get-balance");
    
    
    let totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);

    totalCost.innerText = totalExpenses;


   let balanced = parseFloat(totalIncome) - parseFloat(totalExpenses);

   getBalance.innerText = balanced;

    let percentagIput = document.getElementById("save-input").value;
    
    
    let getPercentagAmount = (parseFloat(getBalance.innerText) * parseFloat(percentagIput))/100 ;

    let saveAmount = document.getElementById("save-amount")
    

     saveAmount.innerText = getPercentagAmount

     let remainBalance = document.getElementById("remaining")

     let remainingBalance = (parseFloat(getBalance.innerText) - parseFloat(saveAmount.innerText))

     remainBalance.innerText = remainingBalance
    

}
   
