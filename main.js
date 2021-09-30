const initialValue = document.querySelector('#initial');
const noOfStocks = document.querySelector('#quantity');
const currentValue = document.querySelector('#current');
const checkBtn = document.querySelector('#check');
const output = document.querySelector('#output')
const error = document.querySelector('#error')

function calculateStocksPrice(initial, quantity, current){
    if(initial > current){
        const loss = (initial - current) * quantity; 
        const lossPercentage = ((loss/initial)*100).toFixed(2)
        showMessage("You had loss of " +loss + " and the loss percentage " +lossPercentage + " %" , "#F58F7C")
    }
    else if(current > initial){
        const profit = (current - initial) * quantity; 
        const profitPercentage = ((profit/initial)*100).toFixed(2);
        showMessage("You had profit of " +profit + " and profit percentage " +profitPercentage + " % ", "#86C232")
    }
    else{
        showMessage("NO GAIN NO PAIN", "#66FCF1")
    }
    
}
function showMessage(msg, textColor){
    output.innerText = msg
    output.style.color = textColor;
}
function checkProfitOrLoss(){
    let initial = Number(initialValue.value);
    let qty = Number(noOfStocks.value);
    let current = Number(currentValue.value);
    if(initial&&qty&&current){
        const sum = calculateStocksPrice(initial  ,qty ,current)
        hideError();
        output.style.display = "block"
    }
    else{
        showError("Please fill all the fields!");
        hideMessage();
    }
}

function showError(err){
    error.style.display = "block";
    error.innerText = err;
}

function hideError(){
    error.style.display = "none";
}

function hideMessage(){
    output.style.display = "none";
}
checkBtn.addEventListener('click', checkProfitOrLoss)