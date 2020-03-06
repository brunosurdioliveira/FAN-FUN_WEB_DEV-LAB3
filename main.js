/*
    Name: Bruno Surdi Oliveira
    Date: Feb 2020
    Purpose: Lab 3 - Fast Food Ordering System Calculator
*/

// Ask User Information
var userName = prompt("Who is paying for the order? ", "Bruno");
var peopleNo = parseInt(prompt("How many people are ordering food? ", 4));

// Making the Orders and declaring the variables
var counter = 0;
var mealPrice = 0;
var sum = 0;
var userAChoice = 0;
var userBChoice = 0;
var userCChoice = 0;
var userDChoice = 0;
var userOrder = 0;

// Creating loop
do {
    counter++;
    userOrder = prompt("Enter meal option (A, B, C, D) " + "#" + counter + "\nA - Hamburguer and Fries, $9.95 \nB - Soup and Salad, $13.50 \nC - Turkey Wrap and Veggies, $7.95 \nD - Hot Dog and Onion Rings, $11.50");

    userOrder = userOrder.toUpperCase();
    // console.log(userOrder); -- checking if it is in upper case

    if (userOrder === "A") {
        mealPrice = 9.95;
        sum += mealPrice;
        userAChoice += 1;
    }
    else if (userOrder === "B") {
        mealPrice = 13.50;
        sum += mealPrice;
        userBChoice += 1;
    }
    else if (userOrder === "C") {
        mealPrice = 7.95;
        sum += mealPrice;
        userCChoice += 1;
    }
    else if (userOrder === "D") {
        mealPrice = 11.50;
        sum += mealPrice;
        userDChoice += 1;
    }
    else {
        // In this case, if the user entered an invalid option, alert and ask him to input a valid option
        do {
            alert("You entered an invalid option, please Enter a valid meal option!");
            userOrder = prompt("Enter meal option (A, B, C, D) " + "#" + counter + "\nA - Hamburguer and Fries, $9.95 \nB - Soup and Salad, $13.50 \nC - Turkey Wrap and Veggies, $7.95 \nD - Hot Dog and Onion Rings, $11.50");
            userOrder = userOrder.toUpperCase();

            if (userOrder === "A") {
                mealPrice = 9.95;
                sum += mealPrice;
                userAChoice += 1;
            }
            else if (userOrder === "B") {
                mealPrice = 13.50;
                sum += mealPrice;
                userBChoice += 1;
            }
            else if (userOrder === "C") {
                mealPrice = 7.95;
                sum += mealPrice;
                userCChoice += 1;
            }
            else if (userOrder === "D") {
                mealPrice = 11.50;
                sum += mealPrice;
                userDChoice += 1;
            }

        } while (userOrder !== "A" && userOrder !== "B" && userOrder !== "C" && userOrder !== "D")
        // console.log(userOrder); --- checking the userOrder inputed
    }
} while (counter < peopleNo)
// console.log(sum); --- checking if the sum is correct 

// Output the order quantity:
console.log(userName + ", here is your food order for your group of " + peopleNo + " people: \n-------------------------------- \n" + userAChoice + " of Meal Option A \n" + userBChoice + " of Meal Option B \n" + userCChoice + " of Meal Option C \n" + userDChoice + " of Meal Option D \n--------------------------------");
document.write(userName + ", here is your food order for your group of " + peopleNo + " people: <br>-------------------------------- <br>" + userAChoice + " of Meal Option A <br>" + userBChoice + " of Meal Option B <br>" + userCChoice + " of Meal Option C <br>" + userDChoice + " of Meal Option D <br>--------------------------------<br>");

// HST fee and service Fee 
const HST = 0.13;
var serviceFee = 0.03;

// Calculate Tax and Service Fee and output them
var tax = sum * HST;
console.log("Tax: $" + Math.trunc(tax));
document.write("<br>Tax: $" + Math.trunc(tax));

var totalServiceFee = sum * serviceFee;
console.log("Service Fee: $" + Math.trunc(totalServiceFee));
document.write("<br>Service Fee: $" + Math.trunc(totalServiceFee));

// Calculate Total/ output the total bill and thanks for the order
var totalBill = sum + tax + totalServiceFee;
console.log("Total Bill: $" + Math.trunc(totalBill) + "\n-------------------------------- \nThank you for your order " + userName + "! Will that be credit or debit?");
document.write("<br>Total Bill: $" + Math.trunc(totalBill) + "<br>-------------------------------- <br>Thank you for your order " + userName + "! Will that be credit or debit?");