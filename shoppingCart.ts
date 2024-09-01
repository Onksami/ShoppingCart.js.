
type Category =  number | string ;

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

let shoppingCart: Product[] = [];


const Categories: { [key in Category]: Category } = {
  ELECTRONICS: "Electronics",
  GROCERIES: "Groceries",
  CLOTHING: "Clothing",
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
  { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
  { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];



const addToCart = (product: Product): void => {
  shoppingCart.push(product);
};


const calculateTotal = (cart: Product[]): string => {
  let total = 0;
  cart.forEach((item) => (total += item.price));
  return total.toFixed(2);
};

const displayCart = (cart: Product[]): void => {
  if (cart.length === 0) {
    return;
  }

  console.log("Your cart contains:");
  cart.forEach((item) => {
    console.log(`- ${item.name} (${item.category}): $${item.price}`);
  });
  console.log(`Total: $${calculateTotal(cart)}`);
};

addToCart(products[0]); //  Laptop
addToCart(products[2]); //  Bananas
displayCart(shoppingCart);