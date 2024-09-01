var shoppingCart = [];
var Categories = {
    ELECTRONICS: "Electronics",
    GROCERIES: "Groceries",
    CLOTHING: "Clothing",
};
var products = [
    { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];
var addToCart = function (product) {
    shoppingCart.push(product);
};
var calculateTotal = function (cart) {
    var total = 0;
    cart.forEach(function (item) { return (total += item.price); });
    return total.toFixed(2);
};
var displayCart = function (cart) {
    if (cart.length === 0) {
        return;
    }
    console.log("Your cart contains:");
    cart.forEach(function (item) {
        console.log("- ".concat(item.name, " (").concat(item.category, "): $").concat(item.price));
    });
    console.log("Total: $".concat(calculateTotal(cart)));
};
addToCart(products[0]); //  Laptop
addToCart(products[2]); //  Bananas
displayCart(shoppingCart);
