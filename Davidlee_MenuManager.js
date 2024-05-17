let foodDatabase = [
    { foodId: 1, name: "fries", price: 10.90 }
];
//Order "object" to manage customer orders
// array fir  foodId, quantity 
// total cost of the order this pretty much makes a calculation every time a new item is added
let order = {
    items: [],
    total: 0
};


function addFoodItem(name, price) {
    const foodId = foodDatabase.length > 0 ? foodDatabase[foodDatabase.length - 1].foodId + 1 : 1;
    foodDatabase.push({ foodId, name, price });
    console.log(`Added new food item: ${name}`);
}
//removes a food item on the basis of it's id
function removeFoodItem(foodId) {
    foodDatabase = foodDatabase.filter(item => item.foodId !== foodId); //id of food removed
    console.log(`Removed food item with ID: ${foodId}`);
}
//adds an item on basis of id and quantity

function addFoodToOrder(foodId, quantity) {
    const food = foodDatabase.find(item => item.foodId === foodId);
    if (!food) {
        console.log("Food item not found.");
        return;
    }
    const orderItemIndex = order.items.findIndex(item => item.foodId === foodId);
    if (orderItemIndex > -1) {
        order.items[orderItemIndex].quantity += quantity;
    } else {
        order.items.push({ foodId, quantity });
    }
    console.log(`Added ${quantity} of ${food.name} to the order.`);
    calculateTotal();
}
//removes food from order by it's id
function removeFoodFromOrder(foodId) {
    order.items = order.items.filter(item => item.foodId !== foodId);
    console.log(`Removed food item with ID: ${foodId} from order.`);
    calculateTotal();
}
//clears the order entirely
function clearOrder() {
    order.items = [];
    order.total = 0;
    console.log("Order cleared");
}
//checks if food id exists after which adds the food to the order then Calculates the total cost of the current order from the items price and quantity
function calculateTotal() {
    order.total = order.items.reduce((acc, item) => {
        const food = foodDatabase.find(food => food.foodId === item.foodId);
        return acc + (food.price * item.quantity);
    }, 0);
    console.log(`Total order cost: $${order.total.toFixed(2)}`);
}
//exports the modules
module.exports = {
    addFoodItem,
    removeFoodItem,
    addFoodToOrder,
    removeFoodFromOrder,
    clearOrder,
    calculateTotal
};
