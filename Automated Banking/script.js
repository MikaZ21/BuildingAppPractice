let accountBalance = 6500;

const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const amountInput = document.getElementById('amount');
const pinInput = document.getElementById('pin');
const currentBalance = document.getElementById('balance-amount');
const errorMessage = document.querySelector('.err-msg');

const deposit = () => {
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    if (pin === '1234' && amount > 0) {
      accountBalance += amount;
      updateBalance();
      // amountとpinの値をリセットする。
      amountInput.value = '';
      pinInput.value = '';
    } else {
      showError("Transaction failed: Incorrect PIN or invalid amount.");
    }
};
  
const withdraw = () => {
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    console.log('Amount:', amount);
    console.log('PIN:', pin);
    console.log('Current Balance before withdrawal:', accountBalance);

    if (pin === '1234' && amount > 0 && amount <= accountBalance) {
      accountBalance -= amount;
      updateBalance();
      amountInput.value = '';
      pinInput.value = '';

      console.log('New Balance after withdrawal:', accountBalance); // Log the updated balance
    } else if (pin !== '1234') {
        showError("Transaction failed: Incorrect PIN.");
    } else if (amount > accountBalance) {
        showError("Transaction failed: Insufficient balance.");
    } else {
        showError("Transaction failed: Invalid amount.");
    }
  };
  
const updateBalance = () => {
    currentBalance.textContent = `$${accountBalance.toFixed(2)}`;
}

const showError = (message) => {
    errorMessage.textContent = message;
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000);
};

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

const greeting = (name) => `Welcome, ${name}!`;
// Get the HTML element where to display the greeting
const greetingElement = document.getElementById('greeting');
// A variable containing the user's name
const userName = "Jennifer";
// Update the greeting element's content
greetingElement.textContent = greeting(userName);

// Initialize the balance when the page loads
updateBalance();


console.log('Script loaded');
