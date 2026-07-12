class Product{
    name:string;
    price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
}

class shoppingKart  {
    products:Product[] ;
    constructor(){
        this.products=[];
    }
    addProduct(product:Product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }
    saveCart(){
        console.log("cart saved");
    }
}

interface DBPersistance{
    cart:shoppingKart;
    saveCart(cart:shoppingKart):void; 
}

class SaveToMongoDB implements DBPersistance{
    cart:shoppingKart;
    saveCart(cart:shoppingKart): void {
        console.log("cart saved to mongoDB",cart);
    }
}

class SaveToHasura implements DBPersistance{
    cart:shoppingKart;
    saveCart(cart:shoppingKart): void {
        console.log("cart saved to hasura",cart);
    }
}

let one_product=new Product("eggs",500)
let two_product= new Product("milk",100)
let three_product=new Product('bread',150)

let cart= new shoppingKart()
cart.addProduct(one_product)
cart.addProduct(two_product)
cart.addProduct(three_product)

console.log(cart)

let saveToMongoDB=new SaveToMongoDB()
saveToMongoDB.saveCart(cart)
console.log('mongoDB',saveToMongoDB)

let saveToHasura=new SaveToHasura()
saveToHasura.saveCart(cart)
console.log('hasura',saveToHasura)


/// here we can see we are overidding the save function of db perisistance abstarct class