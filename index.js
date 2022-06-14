// - Create variables and/or calculate:
// - The gross salary. Use 500 EUR for now.
// - Employee pension contribution, use 5% if not sure 🙂
//   - Taxable amount (salary minus pension)
// - Now the #fun part - calculate how much the person is taxed based on:
//   - 0% tax on 0-80 EUR per month
//   - 4% on amounts between 80-250 EUR
//   - 8% on amounts between 250-450 EUR
//   - 10% on everything over 450 EUR.
// - Calculate the take-home pay by subtracting the tax from the taxable income
// - Output the final result to the console. [Come up with a nice understandable message]

// Get the app to work with the salary of 500 EUR first

// calculating the gross and taxable salary in Euros

let salary = 1000
let employeeContributionRate = 0.05
let pension = salary * employeeContributionRate
let taxableSalary = salary - pension

// calculating the tax rates
let taxRateBetween80And250 = 0.04
let taxRateBetween250And450 = 0.08
let taxRateOver450 = 0.1

// calculating the tax
let taxBetween80And250
if (taxableSalary >= 250) {
  taxBetween80And250 = 170 * taxRateBetween80And250
} else if (taxableSalary > 80) {
  taxBetween80And250 = (taxableSalary - 80) * taxRateBetween80And250
} else {
  taxBetween80And250 = 0
}

let taxBetween250And450
if (taxableSalary >= 450) {
  taxBetween250And450 = 200 * taxRateBetween250And450
} else if (taxableSalary > 250) {
  taxBetween250And450 = (taxableSalary - 250) * taxRateBetween250And450
} else {
  taxBetween250And450 = 0
}

let taxOver450
if (taxableSalary > 450) {
  taxOver450 = (taxableSalary - 450) * taxRateOver450
} else {
  taxOver450 = 0
}

let totalTaxes = taxBetween80And250 + taxBetween250And450 + taxOver450

// calculating the net salary
let netSalary = salary - pension - totalTaxes

console.log(`
    Gross salary: ${salary.toFixed(2)}€
    Employee contribution: ${pension.toFixed(2)}€
    Taxable salary: ${taxableSalary.toFixed(2)}€
  
    Taxes:
    - Between 80 and 250: ${taxBetween80And250.toFixed(2)}€
    - Between 250 and 450: ${taxBetween250And450.toFixed(2)}€
    - Over 450: ${taxOver450.toFixed(2)}€
    Total: ${totalTaxes.toFixed(2)}€
  
    Net salary: ${netSalary.toFixed(2)}€
  `)

// function calculateNetSalary(salary) {
//   let employeeContributionRate = 0.05
//   let pension = salary * employeeContributionRate
//   let taxableSalary = salary - pension

//   // calculating the tax rates
//   let taxRateBetween80And250 = 0.04
//   let taxRateBetween250And450 = 0.08
//   let taxRateOver450 = 0.1

//   // calculating the tax
//   let taxBetween80And250
//   if (taxableSalary >= 250) {
//     taxBetween80And250 = 170 * taxRateBetween80And250
//   } else if (taxableSalary > 80) {
//     taxBetween80And250 = (taxableSalary - 80) * taxRateBetween80And250
//   } else {
//     taxBetween80And250 = 0
//   }

//   let taxBetween250And450
//   if (taxableSalary >= 450) {
//     taxBetween250And450 = 200 * taxRateBetween250And450
//   } else if (taxableSalary > 250) {
//     taxBetween250And450 = (taxableSalary - 250) * taxRateBetween250And450
//   } else {
//     taxBetween250And450 = 0
//   }

//   let taxOver450
//   if (taxableSalary > 450) {
//     taxOver450 = (taxableSalary - 450) * taxRateOver450
//   } else {
//     taxOver450 = 0
//   }

//   let totalTaxes = taxBetween80And250 + taxBetween250And450 + taxOver450

//   // calculating the net salary
//   let netSalary = salary - pension - totalTaxes

//   console.log(`
//     Gross salary: ${salary.toFixed(2)}€
//     Employee contribution: ${pension.toFixed(2)}€
//     Taxable salary: ${taxableSalary.toFixed(2)}€

//     Taxes:
//     - Between 80 and 250: ${taxBetween80And250.toFixed(2)}€
//     - Between 250 and 450: ${taxBetween250And450.toFixed(2)}€
//     - Over 450: ${taxOver450.toFixed(2)}€
//     Total: ${totalTaxes.toFixed(2)}€

//     Net salary: ${netSalary.toFixed(2)}€
//   `)
// }

// let salary = Number(prompt('What is your salary?'))

// if (Number.isNaN(salary)) {
//   console.log('Please enter a valid salary')
// } else {
//   calculateNetSalary(salary)
// }
