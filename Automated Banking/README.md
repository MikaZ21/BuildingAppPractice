## 🏛️ This is a automated banking portal that allows users to perform basic transactions (deposit and withdrawal),view their current balance, and review their transaction history. <br>The interface is clean and user-friendly, built with HTML, CSS, and JavaScript.

### Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [What I learned](#what-i-learned)

## Overview

### The challenge
* Greeting the user
* Displaying the current balance, performing transactions (deposit or withdrawal)
* Showing a transaction history that dynamically updates based on user interactions.
* Implementing a basic and clean design with some colors and spacing for better readability and user experience.
* Ensuring the application is responsive and works well on different screen sizes.
* Sorting the transaction history by the newest transactions at the top.

### Screenshot

## 🔹 User Greeting:
* Greets the user by their name upon loading the page.
* Customizable welcome message.

![Desktop-Screen](https://github.com/MikaZ21/CodingGame/assets/93892096/9626a451-2b0b-4757-a9db-47a89e3e3b03)*Desktop Screen*

### What I learned

📍 DOM Manipulation:
	Gained experience in dynamically updating the DOM using JavaScript to reflect changes in real-time.<br>
📍 Event Handling:
	Learned to handle user interactions through event listeners for buttons and form inputs.<br>
📍 Form Validation:
	Implemented basic form validation to ensure inputs meet required conditions, such as correct PIN and positive transaction amounts.<br>
📍 Responsive Design:
	Developed a responsive layout that works well on both desktop and mobile devices using CSS.<br>
📍 Error Handling:
	Implemented error handling to provide user feedback on incorrect PINs or invalid transaction amounts.<br>
📍 CSS Styling:
	Applied CSS to enhance the user interface with a clean and user-friendly design.<br>
📍 String Interpolation and Formatting:
	Used template literals for dynamic greetings and formatted currency values for better readability.<br>
📍 Transaction Management:
	Built a system to manage and display transaction history, including sorting transactions by the newest first.<br>

```js
const addToTransactionHistory = (type, amount) => {
    const transactionItem = document.createElement('li');
    const timestamp = new Date();

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    const dateStr = timestamp.toLocaleDateString('en-US', dateOptions);
    const timeStr = timestamp.toLocaleTimeString('en-US', timeOptions);

    const transactionHistoryText = document.createElement('span');
    transactionHistoryText.textContent = `${type === 'Deposit' ? '+' : '-'} ${formatCurrency(amount)}`;
    transactionHistoryText.style.color = type === 'Deposit' ? 'green' : 'orange';

    const transactionHistoryDate = document.createElement('span');
    transactionHistoryDate.textContent = `${dateStr}, ${timeStr}`;

    if (transactionList.firstChild) {
        transactionList.insertBefore(transactionItem, transactionList.firstChild);
    } else {
        transactionList.appendChild(transactionItem);
    }
    
    transactionItem.appendChild(transactionHistoryText);
    transactionItem.appendChild(transactionHistoryDate);
};
```

📍 Cross-Browser Compatibility
Ensuring the design and functionality worked across different web browsers.
* Safari
* Chrome

---
## 🔹 Current Balance Display:
* Shows the user’s current account balance.
* Updates in real-time as transactions are performed.

<img alt="desktop-Deposit-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/9f6e76d3-7138-4ac4-9176-ce88d6fc825a" width="70%" height="7%">*Desktop Screen: Deposit BankingApp*

---
## 🔹 Transactions:
* Allows the user to deposit or withdraw funds.
* Validates that the amount entered is a positive number.
* Ensures the correct PIN (4-digit) is entered before processing transactions.

<img alt="desktop-deposit-success-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/80ab19f6-8a88-4904-b18c-4ba13262c933" width="70%" height="70%">*Desktop Screen:Deposit Success*

---
<img alt="desktop-withdrawal-success-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/d1eaf4ec-347d-40ae-aae8-f588e45b7b6e" width="70%" height="70%">*Desktop Screen: Withdrawal Success*

---
## 🔹 Responsive Design:
* User-friendly on both desktop and mobile devices.

<img alt="mobile-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/2a2d3c33-d947-4af5-abe1-bc5fb295f22c" width="70%" height="70%">*Mobile Screen: BankingApp*

---
## 🔹 Transaction History:
* Displays a list of all transactions (deposit and withdrawal).
* New transactions appear at the top of the list.
* Includes the date and time of each transaction.

<img alt="mobile-transactionHistory-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/2fcc9086-b943-47df-a8c6-15f0db4ce7de" width="50%" height="50%">*Mobile Screen: TransactionHistory BankingApp*

---
<img alt="desktop-Error-BankingApp" src="https://github.com/MikaZ21/CodingGame/assets/93892096/f4c83329-225a-4274-b45f-cfffb0ae81e3" width="50%" height="50%">*Desktop Screen: Error BankingApp*

---

## ✨ This project demonstrates my understanding of core web development concepts and improved my ability to create interactive, user-friendly applications. 💻✨
