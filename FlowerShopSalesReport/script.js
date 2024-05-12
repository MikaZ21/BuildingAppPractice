let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
const daysOfTheWeek = ["Monday", "Thuesday", "wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let firstWeekSales = sales.filter((sale, i) => i < 7);
let firstWeekCustomers = customers.filter((customer, i) => i < 7);


document.addEventListener("DOMContentLoaded", function() { // ensure the script runs after the document content is fully loaded
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
    const table = document.getElementById("myTable"); // Access to the table
    let cells = table.rows[0].querySelectorAll('td'); // Selecting the first row

    daysOfTheWeek.forEach(function(day, index) {
        // cells[index + 1].innerText = day;
        cells[index].innerText = day;
    }); // Loop through each cell and assign the corresponding day
}

function populateWkSales() {
    // console.log("Function called"); 

    const table = document.getElementById("myTable"); // Access to the table
    // console.log("Table found:", table); 

    let cells = table.rows[1].querySelectorAll('td'); // Selecting the second row for first week sales
    // console.log("Cells found:", cells);

    const firstWeekSales = sales.filter((sale, i) => i < 7);

    firstWeekSales.forEach(function(sale, index) {
        // cells[index + 1].innerText = day;
        cells[index].innerText = '$ ' + sale; // Prepend '$' to each sale value
    }); // Loop through each cell and assign the corresponding sales data
}


function populateWkCustomers() {

    const table = document.getElementById("myTable"); 
    let cells = table.rows[2].querySelectorAll('td'); // Selecting the third row for first week customer's count
    const firstWeekCustomers = customers.filter((customer, i) => i < 7);

    firstWeekCustomers.forEach(function(customer, index) {
        cells[index].innerText = customer; 
    }); // Loop through each cell and assign the corresponding customer count data
}

function salesSum() {
    const table = document.getElementById("sumOfTable"); 
    let cells = table.rows[0].querySelectorAll('td'); 
    let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr, 0);

    // Format the number as currency with comma separator for thousands
    let formattedSalesSum = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(firstWeekSalesSum);
    
    cells[0].innerText = formattedSalesSum;
}

function avgSalesDay() {
    const table = document.getElementById("sumOfTable"); 
    let cells = table.rows[0].querySelectorAll('td'); 
    let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr, 0);
    let averageSalesPerDay = firstWeekSalesSum / 7;

    // Format the number as currency with comma separator for thousands
    let formattedAvgSales = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(averageSalesPerDay);
    
    cells[1].innerText = formattedAvgSales;
}

function customersSum() {
    const table = document.getElementById("sumOfTable"); 
    let cells = table.rows[1].querySelectorAll('td'); 
    let firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev + curr, 0);
    
    cells[0].innerText = firstWeekCustomersSum;
}

function avgCustomerSpendDay() {
    const table = document.getElementById("sumOfTable"); 
    let cells = table.rows[1].querySelectorAll('td'); 
    let firstWeekSalesSum = firstWeekSales.reduce((prev, curr) => prev + curr, 0); 
    let firstWeekCustomersSum = firstWeekCustomers.reduce((prev, curr) => prev + curr, 0);
    let firstWeekCustomerAvgSpend = firstWeekSalesSum / firstWeekCustomersSum;

    let formattedAvgCustomers = new Intl.NumberFormat( 
        'en-US', {style: 'currency', currency: 'USD' }).format(firstWeekCustomerAvgSpend);
    
    cells[1].innerText = formattedAvgCustomers;
}

function avgCustomerSpendByDay() {
    const table = document.getElementById("myTable"); // Access to the table
    const avgCustomerRow = table.querySelector(".avgCustomerSpend"); // Selecting the row for average customer spend

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
