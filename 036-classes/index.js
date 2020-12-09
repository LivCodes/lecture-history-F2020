class BankAccount {
    constructor(owner, startingBalance = 0) {
        this.owner = owner;
        this._currentBalance = startingBalance;
        this.transactions = []; // be a list of transaction objects 
            //{timestamp: amount: +/-, balanceBefore: balanceAfter}
    }
    
    // getter
    get balance() {
        return this._currentBalance;
    }
    
    //explain to your younger sibling what this method does
    set balance(num) {
        if (num < 10000) {
            this._currentBalance = num
        } else {
            //does nothing
        }
    }
    
    //think about how to write a deposit method
    deposit(amountToDeposit){
        const newBalance = this._currentBalance + amountToDeposit
        const obj = {
            timestamp: new Date(), 
            amount: amountToDeposit, 
            balanceBefore: this._currentBalance, 
            balanceAfter: newBalance
        }
        
        this.transactions.push(obj);
        //current balance should increase by num
        this._currentBalance = newBalance;
    }

    //think about how to write a withdraw method 
    withdraw(amountToWithdraw){
        const obj = {
            timestamp: new Date(), 
            amount: -amountToWithdraw, 
            balanceBefore: this._currentBalance, 
            balanceAfter: amountToWithdraw > this._currentBalance ? this._currentBalance : this._currentBalance - amountToWithdraw
        }        
        //this._currentBalance - amountToWithdraw (if the trans is GOOD)
        //this._currentBalance (if the trans is BAD)
        this.transactions.push(obj)
        if(amountToWithdraw > this._currentBalance){
            return "Sorry, don't have enough funds"
            
        }else{
            this._currentBalance -= amountToWithdraw;
            
        }
    }
}



//instances 
const reubensAccount = new BankAccount('Reuben');
reubensAccount.deposit(5000);
console.log(reubensAccount.balance)