// Login Btn Click Function

document.querySelector('.login-btn').addEventListener('click', function () {
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.transaction-section').style.display = 'block';
});

// Deposit Value

document.querySelector('.deposit-input').addEventListener('click', function () {
    const depositValue = getInputValue('.deposit-amount');
    if (!depositValue || depositValue < 0) {
        document.querySelector('.warning-message').textContent = 'Wrong Amount 😭';
        //document.querySelector('.warning-message').classList = 'text-danger d-block';
        document.querySelector('.deposit-amount').value = '';
    } else {
        getUpdateValue('.current-deposit', depositValue);
        getUpdateValue('.current-balance', depositValue);
        document.querySelector('.warning-message').textContent = 'Succefully Added';
        document.querySelector('.deposit-amount').value = '';
    }
});

// Withdraw Value

document.querySelector('.withdraw-input').addEventListener('click', function () {
    const withdrawValue = getInputValue('.withdraw-amount');
    const currentBalance = Number(document.querySelector('.current-balance').textContent);
    if (!withdrawValue || withdrawValue < 0) {
        document.querySelector('.warning-message').textContent = 'Wrong Amount 😭';
        //document.querySelector('.warning-message').classList = 'text-danger';
        document.querySelector('.withdraw-amount').value = '';
    } else if (withdrawValue > currentBalance) {
        document.querySelector('.warning-message').textContent = 'Insuficiant Balance 😭';
        //document.querySelector('.warning-message').classList = 'text-danger';
    } else {
        getUpdateValue('.current-withdraw', withdrawValue);
        getUpdateValue('.current-balance', -1 * withdrawValue);
        document.querySelector('.withdraw-amount').value = '';
        document.querySelector('.warning-message').textContent = 'Succefully Withdraw';
    }
});

// Function for Getting Input Number

function getInputValue(inputValue) {
    const value = Number(document.querySelector(inputValue).value);
    return value;
}

// Function for Calculation
function getUpdateValue(updateValue, newValue) {
    let currentValue = Number(document.querySelector(updateValue).textContent);
    let totalValue = currentValue + newValue;

    document.querySelector(updateValue).textContent = totalValue;
}
