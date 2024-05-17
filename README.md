# Restaurant Manager Module

This menu Manager module provides functionalities to manage menu data. The module allows users to add menu item, add menu item to order , remove menu item from order, clear the order, and calculate total order cost.

## Setting up the Node Module

1. Clone the repository to your local directory.
2. Create a new file named app.js and insert the code below:
```
const restaurants =  require('./food_menu.js'));
```
3. To run the module, open a new terminal and enter the following command:
```
node app.js
```

## How to Use the Functions

### 'restaurantManager.addFoodItem(name, price)'

This function allows the user to add a food to the database. The required parameters are:

- `name`: The name of the item.
- `price`: The price of item.


Example:
```
restaurantManager.addFoodItem("Pizza", 10.99);
```



### 'restaurantManager.addFoodToOrder'

This function uses 2 parameters the food id and the food quantity allowing the user to decide the food item and quantity

Example:
```
restaurantManager.addFoodToOrder(1, 2); //addition of 2 fries
```

### 'restaurantManager.removeFoodFromOrder'

This function takes in one parameter, ID which allows the user to remove items/item from the order

Example:
```
restaurantManager.removeFoodFromOrder(2); // Remove Burger
```


### 'restaurantManager.clearOrder();'

This function removes all items from  the order

Example:
```
restaurantManager.clearOrder(); // Output: Order cleared.
```


### 'restaurantManager.calculateTotal(); '

For each item, calculate finds the corresponding food item in the foodDatabase using  ID.
It calculates the cost of each item by multiplying its price by its quantity. 
It then accumulates the total cost by summing up the costs of all items in the order.

Example:
```
// Recalculate total order cost
restaurantManager.calculateTotal(); 
```



## Example

```
const restaurantManager = require('./food_menu.js');

// Add food items to the database
restaurantManager.addFoodItem("Pizza", 10.99);
restaurantManager.addFoodItem("Burger", 8.49);
restaurantManager.addFoodItem("Salad", 6.00);

// Calculate total order cost
restaurantManager.calculateTotal();

// Add items to the order
restaurantManager.addFoodToOrder(1, 2); //addition of 2 fries
restaurantManager.addFoodToOrder(2, 1); //addition of 1 Burger



// Remove a food item from the order
restaurantManager.removeFoodFromOrder(2); // Remove Burger



// Clear the order
restaurantManager.clearOrder(); // Output: Order cleared.

// Recalculate total order cost
restaurantManager.calculateTotal(); 

```
