1. Create a single HTML page using the editor of your choice.
2. Many fast food restaurants now have applications, allowing you to order a meal in advance; then your order is completed and ready for you to pick up when you arrive. Write a program that will simulate a fast food ordering system that allows for a group order. Your application will gather meal choices for a group and then output a summary of the food order.
3. To begin, gather the following input from the user using prompts:
● Who is paying for the order? Enter your name as a default
● How many people are ordering food? Default is “4”
4. Then, using a LOOP, repeat the following processes until all orders are placed:
● Get a person’s meal option (see the sample prompt pop-up boxes shown opposite for the informa on to include and note the use of a # counter in the prompt)
● Check the meal option that was selected, then: o Assign the corresponding meal price
o Increment a corresponding meal counter
For example, if meal option ‘A’ is selected, meal = 9.95 and meal option ‘A’ counter is updated by one
● Update the total for the order by the meal price
5. Outside the loop, once all orders are placed, calculate the following: 
● an HST Fee of 13% of the total price of the meals
● a service fee of 3% of the total price of the meals
● a final total, including the HST fee and a service fee
6. Then, output a bill showing a summary of the meals selected and the
total food order. Use Math.trunc() to format all totals displayed on
screen.
(You may output to the webpage using document.write or output to the console, your choice!) See the sample output shown on the next page.
