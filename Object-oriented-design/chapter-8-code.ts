interface Nameable {
    getName(): string;
}

class CustList{
    private customers: string[] = [];
    
    add(customer: string) {
        this.customers.push(customer);
    }
    
    getCustomer(index: number): string {
        return this.customers[index];
    }
}


abstract class Shop implements Nameable {
    companyName: string;
    customerList: CustList;
    
    constructor(companyName: string, customerList: CustList) {
        this.companyName = companyName;
        this.customerList = customerList;
    }

    getName(): string {
        return this.companyName;
    }
    
    abstract getInventory(): string[];   //commonality found in all shops
    abstract buyItem(item: string): void; //commonality found in all shops

    calculateTax(tax: number): number {
        return tax*0.18;
    }

}


class ElectronicsShop extends Shop {
    private inventory: string[] = [
        "Laptop",
        "Phone",
        "Tablet"
    ];
    
    constructor(companyName: string, customerList: CustList) {
        super(companyName, customerList);
    }
    
    getInventory(): string[] {
        return this.inventory;
    }
    
    buyItem(item: string): void {
        this.inventory.push(item);
    }
}

const electronicsShop = new ElectronicsShop("Electronics Shop", new CustList());
console.log(electronicsShop.getName());
console.log(electronicsShop.getInventory());
electronicsShop.buyItem("Watch");
console.log(electronicsShop.getInventory());
console.log(electronicsShop.calculateTax(100));
electronicsShop.customerList.add("John");
console.log(electronicsShop.customerList.getCustomer(0));

//  See here we can see how we can use the same interface to create different types of shops
