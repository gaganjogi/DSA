// class Product{
//     name:string;
//     price:number;
//     constructor(name:string,price:number){
//         this.name=name;
//         this.price=price;
//     }
// }

// class shoppingCart{
//     products:Product[];
//     constructor(){
//         this.products=[];
//     }
//     addProduct(product:Product){
//         this.products.push(product);
//     }
//     getProducts(){
//         return this.products;
//     }
//     // calculateTotal(){
//     //     let total=0;
//     //     for(let i=0;i<this.products.length;i++){
//     //         total+=this.products[i].price;
//     //     }
//     //     console.log(total);
//     // }
//     // printInvoice(){
//     //     for(let i=0;i<this.products.length;i++){
//     //         console.log(`${this.products[i].name} and ${this.products[i].price}`)
//     //     }
//     // }
// }


// class PrintingInvoice{ 
//     cart:shoppingCart;
//     constructor(cart:shoppingCart){
//         this.cart=cart;
//     }
//     printInvoice(){
//         for(let i=0;i<this.cart.products.length;i++){
//             console.log(`${this.cart.products[i].name} and ${this.cart.products[i].price}`)
//         }
//     }
// }


// class DBPersistance{
//     cart:shoppingCart;
//     constructor(cart:shoppingCart){
//         this.cart=cart;
//     }
//     saveCart(){
//         console.log("cart saved");
//     }
// }








//     // let product1=new Product("apple",10);
//     // let product2=new Product("banana",20);
//     // let product3=new Product("orange",30);

//     // let cart=new shoppingCart();
// // cart.addProduct(product1);
// // cart.addProduct(product2);
// // cart.addProduct(product3);

// // console.log(cart.getProducts());
