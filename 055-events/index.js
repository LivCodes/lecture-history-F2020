const teachers = [
  {
    firstName: "Ann", 
    lastName: "Duong", 
    email: "ann@gmail.com"
  },
  {
    firstName: "Reuben", 
    lastName: "Ogbonna", 
    email: "reuben@gmail.com"
  },
  {
    firstName: "Erwins", 
    lastName: "Saget", 
    email: "erwins@gmail.com"
  },
]

// User stories: 
// As a user, I can click on the table header to make it red
// As a user, I can click on a row to make it the selected instructor
document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector("table")
  header.addEventListener("click", clickBait )

  let thead = document.querySelector("thead")
  thead.addEventListener("click", handleTableHeader)
  
  teachers.forEach(teach => {
    addInstructor(teach.firstName, teach.lastName, teach.email);
  })
})

function handleTableHeader(e){
  console.log(e.target)
  e.target.style.color = "red"
}

function handleEmailClick(e){
  e.stopPropagation();
  console.log("updating the email td")
  e.target.style.color = "blue"
}

function clickBait(){
  console.log("I have clicked the table")
}

function selectInstructor(e){
  e.stopPropagation();
  console.log("change the selected instructor tr")
  let row = e.currentTarget;
  document.querySelector("span").innerText = row.innerText
}

function addInstructor(firstName, lastName, email){
  //Here's the row
  const rowElement = document.createElement("tr");
  rowElement.classList.add("instructor")

  rowElement.addEventListener("click", selectInstructor)

  const tbody = document.getElementById("table-body");
  tbody.appendChild(rowElement);
  const firstNameEl = document.createElement("td");
  const lastNameEl = document.createElement("td");
  const emailElement = document.createElement("td");
  rowElement.append(firstNameEl, lastNameEl, emailElement)
  firstNameEl.innerText = firstName;
  lastNameEl.innerText = lastName;
  emailElement.innerText = email;
  emailElement.classList.add("email");
  emailElement.addEventListener("click", handleEmailClick)
}



/*function addEventListener(type, callback){}
if type is a click 
else if type is a keypress 

*/