let accountBalance = 8500;
let errorTimeout;

const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const amountInput = document.getElementById('amount');
const pinInput = document.getElementById('pin');
const currentBalance = document.getElementById('balance-amount');
const errorMessage = document.querySelector('.err-msg');
const transactionList = document.getElementById('transaction-list');

const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency:'USD' });
};

const addToTransactionHistory = (type, amount) => {
    const transactionItem = document.createElement('li');
    const timestamp = new Date();

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    const dateStr = timestamp.toLocaleDateString('en-US', dateOptions);
    const timeStr = timestamp.toLocaleTimeString('en-US', timeOptions);

    const transactionHistoryText = document.createElement('span');
    transactionHistoryText.textContent = `${type}: ${formatCurrency(amount)}`;

    const transactionHistoryDate = document.createElement('span');
    transactionHistoryDate.textContent = `${dateStr}, ${timeStr}`;
    
    transactionItem.appendChild(transactionHistoryText);
    transactionItem.appendChild(transactionHistoryDate);
    transactionList.appendChild(transactionItem);
};

const deposit = () => {
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    if (pin === '1234' && amount > 0) {
      accountBalance += amount;
      updateBalance();
      addToTransactionHistory('Deposit', amount); // トランザクション履歴に追加
      // amountとpinの値をリセットする。
      amountInput.value = '';
      pinInput.value = '';
      clearErrorStyles();
    } else {
      showError("Transaction failed: Incorrect PIN or invalid amount.");
    }
};
  
const withdraw = () => {
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    if (pin === '1234' && amount > 0 && amount <= accountBalance) {
      accountBalance -= amount;
      updateBalance();
      addToTransactionHistory('Withdraw', amount);
      amountInput.value = '';
      pinInput.value = '';
      clearErrorStyles();

    } else {
      showError("Transaction failed: Incorrect PIN or invalid amount.");
    }
  };
  
const updateBalance = () => {
    currentBalance.textContent = formatCurrency(accountBalance);
}

const showError = (message) => {
    clearTimeout(errorTimeout);
    errorMessage.textContent = message;
    errorMessage.style.opacity = '1';
    errorMessage.style.display = 'block';
    amountInput.classList.add('input-error');
    pinInput.classList.add('input-error');

    errorTimeout = setTimeout(() => {
        hideError();
    }, 10000);
};

const hideError = () => {
    errorMessage.style.opacity = '0';
    setTimeout(() => {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    }, 500); // CSSのトランジションと合わせる
};

const clearErrorStyles = () => {
    amountInput.classList.remove('input-error');
    pinInput.classList.remove('input-error');
    hideError();
};

amountInput.addEventListener('input', clearErrorStyles);
pinInput.addEventListener('input', clearErrorStyles);

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

const greeting = (name) => `Welcome, <span class="user-name">${name}</span> !`;
const greetingElement = document.getElementById('greeting');
const userName = "Jennifer";
// Update the greeting element's content
greetingElement.innerHTML = greeting(userName);

// Initialize the balance when the page loads
updateBalance();