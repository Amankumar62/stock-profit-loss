var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');



function submitHandler(){
    if(initialPrice.value.length ===0 ||stockQuantity.value.length===0 ||currentPrice.value.length === 0){
        outputBox.innerText = "Please provide the values to compute profit/loss";
        return;
    }
    if(Number(initialPrice.value) < 0 || Number(stockQuantity.value) < 0 ||Number(currentPrice.value) < 0 ){
        outputBox.innerText = "Invalid input - Please provide positive input ";
        return;
    }
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage  = (loss/initial)*100;
        lossPercentage = lossPercentage.toFixed(2);
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}`);
    }
    else if(current> initial){
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        profitPercentage = profitPercentage.toFixed(2)
        showOutput(`hey the profit is ${profit} and the percent is ${profitPercentage}`);

    }
    else{
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message){ 
outputBox.innerText = message
}

submitBtn.addEventListener('click',submitHandler)

