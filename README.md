# Restaurant Manager Module

This Restaurant Manager module provides functionalities to manage restaurant data. The module allows users to add, update, delete, search for, and retrieve details of restaurants within a simulated database.

## Setting up the Node Module

1. Clone the repository to your local directory.
2. Create a new file named app.js and insert the code below:
```
const restaurants = require("./Calbert_Restaurants.js");
```
3. To run the module, open a new terminal and enter the following command:
```
node app.js
```

## How to Use the Functions

### 'addRestaurant(name, cuisine, location, rating)'

This function allows the user to add a new restaurant to the database. The required parameters are:

- `name`: The name of the restaurant.
- `cuisine`: The type of cuisine the restaurant serves.
- `location`: The location of the restaurant.
- `rating`: The rating of the restaurant.

Example:
```
restaurants.addRestaurant("Taco Town", "Mexican", "Austin", 4.2);
```

### 'displayRestaurants()'

This function displays all restaurants in the database.

Example:
```
displayRestaurants();
```

### 'searchByCuisine(cuisine)'

This function takes in one parameter, cuisine, allowing the user to search for restaurants serving a specific type of cuisine.

Example:
```
restaurants.searchByCuisine("Indian");
```

### 'searchByLocation(location)'

This function takes in one parameter, location, allowing the user to search for restaurants in a specific location.

Example:
```
restaurants.searchByLocation("Los Angeles");
```

### 'updateRating(name, newRating)'

This function takes in two parameters:

- `name`: The name of the restaurant whose rating needs to be updated.
- `newRating`: The new rating for the restaurant.

Example:
```
restaurants.updateRating("Sushi Central", 3.7);
```

### 'getTopRatedRestaurants()'

This function retrieves and displays all restaurants with a rating of 4.5 or higher.

Example:
```
restaurants.getTopRatedRestaurants();
```

### 'getRestaurantsByRating(minRating, maxRating)'

This function takes in two parameters:

- `minRating`: The minimum rating of the restaurants to be retrieved.
- `maxRating`: The maximum rating of the restaurants to be retrieved.

Example:
```
restaurants.getRestaurantsByRating(4.0, 4.5);
```

### 'deleteRestaurant(name)'

This function takes in one parameter, name, allowing the user to delete a restaurant by its name.

Example:
```
restaurants.deleteRestaurant("Sushi Central");
```

## Example

```
const restaurants = require("./Calbert_Restaurants.js");

// Adds restaurants to the database
restaurants.addRestaurant("Taco Town", "Mexican", "Austin", 4.2);
restaurants.addRestaurant("Burger Barn", "American", "Chicago", 4.3);

// Displays all restaurants in the database
restaurants.displayRestaurants();

// Displays all restaurants that serve the specified cuisine
restaurants.searchByCuisine("Indian");
restaurants.searchByCuisine("Korean");

// Displays all restaurants located in the specified location
restaurants.searchByLocation("Los Angeles");
restaurants.searchByLocation("Texas");

// Updates the specified restaurants rating
restaurants.updateRating("Sushi Central", 3.7);
restaurants.updateRating("Krusty Krab", 5.0);

// Displays all restaurants with a rating >= 4.5
restaurants.getTopRatedRestaurants();

// Displays all restaurants within the specified rating range
restaurants.getRestaurantsByRating(4.0, 4.5);

// Deletes restaurants from the database
restaurants.deleteRestaurant("Sushi Central");
restaurants.deleteRestaurant("Krusty Krab");
```
