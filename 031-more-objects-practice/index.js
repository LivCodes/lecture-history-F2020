function shoppingListFactory(storeName){
    return {
        storeName: storeName,
        items: [],
        moneySpent: 0,
        addItem: function(name, price){
            let obj = {name: name, price: price};
            this.items.push(obj);
            return `${name} was added`;
        },
        getItemCount: function(){
            return this.items.length;
        },
        buyItem: function(str){
            let index = this.items.findIndex( item => item.name === str )
            if (index == -1) { //if the item is not there
                return `${str} not found`;
            }else{ //if the item is in the list
                let foundItem = this.items[index];
                let price = foundItem.price;
                this.items.splice(index, 1); //remove it from items
                this.moneySpent += price;    //add the price to moneySpent
                return `${str} was purchased`;
            }
        }
    }

}
