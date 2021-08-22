function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
    
}
function getInnertextvalue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldvalueText = fieldTag.innerText;
    const value = parseFloat(fieldvalueText);
    return value;
}
function upDateTotal(fielDId, amount) {
    // const totalTag = document.getElementById(fielDId);
    // const previousTotalText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalText);
    const previousTotal = getInnertextvalue(fielDId);
    const newTotal = previousTotal + amount;
    document.getElementById(fielDId).innerText = newTotal;
    return newTotal;
}



function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceText);
    const previousBalance = getInnertextvalue('balance-total');
    
    let  newBalance;
    if (isAdding == true) {
         newBalance = previousBalance + amount;
    }
    else {
         newBalance = previousBalance - amount;
    }
    ocument.getElementById('balance-total').innerText = newBalance;
}

//handle diposite
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount>0) {
        upDateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
    
})

//handle widthdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnertextvalue('balance-total')
    if (amount>0 && amount<=balance) {
        upDateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})
