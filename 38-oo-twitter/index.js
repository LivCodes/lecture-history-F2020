console.log("Welcome to Twitter")

class User {
  constructor(username, email){ //both are strings
    this.username = username;
    this.emailAdress = email; 
    this.followers = [];
    this.followings = [];
    this.tweets = [];
  }
  
  postTweet(text){
    //make a new Tweet instance with the content of dogs and author of ann
    let tweet1 = new Tweet(text, this);
    this.tweets.push(tweet1);
    return tweet1;
  }
  
  numberOfFollowers(){
    return this.followers.length;
  }
  
  numberOfFollowings(){
    return this.followings.length;
  }

  changeUsername(string){
    this.username = string;
    return string;
  }
  
  //Example: ann is now following reuben
  follow(user){
    //push reuben param into the ann's followings array
    this.followings.push(user)
    user.followers.push(this)
    return `${this.username} is now following ${user.username}`
  }
  
  likeTweet(tweet){
    
  }
}

class Tweet {
  constructor(text, author){ //text is a string, author is an instance of User
    if(text.length <= 140){
      this.content = text;
    } else {
      this.content = text.slice(0, 140);
    }
    this.author = author;
    this.comments = [];
    this.timeStamp = new Date();
    this.likeCount = 0;
    this.retweetCount = 0;
  }

  getCharCount(){
    return this.content.length;
  }
  
  getAuthor(){
    return this.author;
  }
}

let ann = new User("InstructorAnn", "ann@marcylabschool.org")
let tweet1 = ann.postTweet("Dogs are better than cats.")
let tweet2 = ann.postTweet("Chocolate is better than vanila.")
let reuben = new User("Reuben", "reuben@marcylabschool.org")
reuben.follow(ann)
let maya = new User("Maya", "maya@gmail.com")
maya.follow(ann)