console.log("connected")

let player = {
    firstName: "Lebron",
    lastName: "James",
    _points: 22,
    benched: false,
    scorePoints: function (point){
        this._points += point;
    },
    get points(){
        return this._points
    },
    set points(val){
        if(val > 0){
            this._points = val;
        }
    },
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(str){
        let arr = str.split(" ")
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
    /*
    scorePoints (point){
        this.points += point;
    }
    */
};















// player.age = 35;

player.gloat = function(){
    console.log(`${this.firstName} ${this.lastName} is the greatest!`)
}