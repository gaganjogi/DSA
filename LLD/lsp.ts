interface NonWithdrawableAccount{
    balance:number;
    deposit(amount:number):void;
}

interface WithdrawableAccount {
    balance:number;
    withdraw(amount:number):void;

}

class SavingsAccount implements WithdrawableAccount{
    balance:number;
    deposit(amount:number):void{
        this.balance+=amount;
        console.log("deposited",amount);
    }
    withdraw(amount:number):void{
        this.balance-=amount;
        console.log("withdrawn",amount);
    }
    
}


class CurrentAccount implements WithdrawableAccount{
    balance:number;
    deposit(amount:number):void{
        this.balance+=amount;
        console.log("deposited",amount);
    }
    withdraw(amount:number):void{
        this.balance-=amount;
        console.log("withdrawn",amount);
    }
}

let savings=new SavingsAccount();
savings.deposit(1000);
savings.withdraw(500);



// signature rule - mainly correctly override  the abstract class function with proper data type or method argument rule

/// return type rule - same return type of the parent class or narrow type of the child class not the ancestor of the parent (co variance)

//exception rule - if a child class throw the exception that is narrow type of the parent class and not the ancestor of the parent class

//property rule - same property of the parent class or narrow type of the child class not the ancestor of the parent class