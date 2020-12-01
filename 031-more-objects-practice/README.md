# Challenge - Create a shopping list

1. First, we are going to create an single shopping list object with properties and methods
2. Then, we'll use that same code to create a factory function 

Image that you are planning to buy groceries at Trader Joes. 
You don't know how many trips you'll make to the store.
But you want a single list of all the items you plan on buying and their prices.
In addition, you want to keep track of how much money you've spent on these items.

## For example

You add three things to your list:
  X bread for $3.50
  X yogurt for $1.00
  X milk for $2.00

You have 3 items in your list but you haven't purchased anything yet, so your money spent is still $0.
You purchase yogurt, so you remove it from your list and the amount you've spent so far is $1.00.
If you were to check how many items are on your list now, it would only be 2.
You purchase bread, so you remove it from your list and the amount you've spent so far is $4.50.
You purchase milk, so you remove it from your list and the amount you've spent so far is $6.50.
There should now be 0 items left on your list. 

### Properties (state)
`storeName` string
`items` array of items objects, for example: [{name: "bread", price: 3.5}, {name: "yogurt", price: 1}], but initialized to an empty array
`moneySpent` number

### Methods (behavior)
X `addItem(obj)` takes in an item object and adds it to the items list, returns a message
X `getItemCount()` returns how many items are currently in the items list
X `buyItem(name)` takes in a item name (string), finds it in the list, remove its, add it to our moneySpent, and returns a message
Bonus: `lookUpPrice(name)`
Bonus: `totalSpent()` return a string of "You have spent <<amount>> at <<stor name>>"
