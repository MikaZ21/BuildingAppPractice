let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 // Declare valuables in the global scope so that it's accessible throughout script.
let firstWeekSales;
let firstWeekCustomers;
let tableSales;
let tableSum;
let firstWeekSalesSum;
let firstWeekCustomersSum;

document.addEventListener("DOMContentLoaded", function() { // ensure the script runs after the document content is fully loaded.
    // If script is placed at the end of the '<body>' tag, it might not need to wait for 'DOMContentLoaded' because by the time the script runs, the DOM is already loaded.

    tableSales = document.getElementById("salesTable"); // Access to the table
    tableSum = document.getElementById("sumOfTable");     
    firstWeekSales = sales.filter((sale, i) => i < 7); // Creating a new array by filtering the original 'sales' array.
    firstWeekCustomers = customers.filter((customer, i) => i < 7);
    firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr, 0);
    firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev + curr, 0);

    
    populateTable();
    populateWkSales();
    populateWkCustomers();
    salesSum();
    customersSum();
    avgSalesDay();
    avgCustomerSpendDay();
    avgCustomerSpendByDay();
})

function populateTable() {
    // console.log("Populating table...");
    let cells = tableSales.rows[0].querySelectorAll('td'); // Selecting all 'td' in the first row of the table.

    daysOfTheWeek.forEach(function(day, index) { // 'day' represents the current day being iterated over, 
                                                // and 'index' represents the index of that day in the array.
        // cells[index + 1].innerText = day;
        cells[index].innerText = day;
    }); // Loop through each cell and assign the corresponding day
}

function populateWkSales() {
    // console.log("Function called"); 

    let cells = tableSales.rows[1].querySelectorAll('td'); // Selecting the second row for first week sales.
    // console.log("Cells found:", cells);

    firstWeekSales.forEach(function(sale, index) {
        // cells[index + 1].innerText = day;
        cells[index].innerText = new Intl.NumberFormat( 
            'en-US', {style: 'currency', currency: 'USD' }).format(sale);  // Format the number as currency with comma separator for thousands.
    }); // Loop through each cell and assign the corresponding sales data
}

function populateWkCustomers() {
    let cells = tableSales.rows[2].querySelectorAll('td'); // Selecting the third row for first week customer's count

    firstWeekCustomers.forEach(function(customer, index) {
        cells[index].innerText = customer; 
    }); // Loop through each cell and assign the corresponding customer count data
}

function salesSum() {
    let cells = tableSum.rows[0].querySelectorAll('td'); 

    let formattedSalesSum = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(firstWeekSalesSum);
    
    cells[0].innerText = formattedSalesSum;
}

function avgSalesDay() {
    let cells = tableSum.rows[0].querySelectorAll('td'); 
    let averageSalesPerDay = firstWeekSalesSum / 7;

    // Format the number as currency with comma separator for thousands
    let formattedAvgSales = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(averageSalesPerDay);
    
    cells[1].innerText = formattedAvgSales;
}

function customersSum() {
    let cells = tableSum.rows[1].querySelectorAll('td'); 
    
    cells[0].innerText = firstWeekCustomersSum;
}

function avgCustomerSpendDay() {
    let cells = tableSum.rows[1].querySelectorAll('td'); 
    let firstWeekCustomerAvgSpend = firstWeekSalesSum / firstWeekCustomersSum;
    let formattedAvgCustomers = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(firstWeekCustomerAvgSpend);
    
    cells[1].innerText = formattedAvgCustomers;
}

function avgCustomerSpendByDay() {
    // Selecting the row for average customer spend.
    const avgCustomerRow = tableSales.querySelector(".avgCustomerSpendByDay");

    for (let i = 0; i < daysOfTheWeek.length; i++) {
        // Calculate the average spend per customer for the current day
        let averageSpendPerCustomer = sales[i] / customers[i];

        // Populate the corresponding cell in the table
        let cell = avgCustomerRow.querySelectorAll('td')[i]; // Adjusted for the first column being for day names

        // Format the number as currency with comma separator for thousands
        let formattedAvgSpend = new Intl.NumberFormat( 
            'en-US', {style: 'currency', currency: 'USD' }).format(averageSpendPerCustomer);
        
        cell.innerText = formattedAvgSpend;
    }
}