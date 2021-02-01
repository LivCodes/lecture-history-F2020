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

document.addEventListener("DOMContentLoaded", () => {
  teachers.forEach(teach => {
    addInstructor(teach.firstName, teach.lastName, teach.email);
  })
})

function handleEmailClick(e){
  e.stopPropagation();
  console.log("updating the email td")
  e.target.style.color = "blue"
}

function selectInstructor(e){
  let row = e.currentTarget;
  document.querySelector("span").innerText = row.innerText
}

function addInstructor(firstName, lastName, email, other=""){
  const tbody = document.getElementById("table-body");
  const rowElement = document.createElement("tr");
  tbody.appendChild(rowElement);
  rowElement.addEventListener("click", selectInstructor)

  const firstNameEl = document.createElement("td");
  const lastNameEl = document.createElement("td");
  const emailElement = document.createElement("td");
  const otherElement = document.createElement("td")
  rowElement.append(firstNameEl, lastNameEl, emailElement, otherElement)

  firstNameEl.innerText = firstName;
  lastNameEl.innerText = lastName;
  emailElement.innerText = email;
  otherElement.innerText = other;
  emailElement.addEventListener("click", handleEmailClick)
}

