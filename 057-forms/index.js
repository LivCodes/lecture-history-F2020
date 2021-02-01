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
  let formElement = document.querySelector("form")
  formElement.addEventListener("submit", handleForm)
})

const handleForm = (event) => {
  event.preventDefault();

  // SELECT THE INDIVIDUAL INPUTS
  let form = event.target
  //let firstNameInput = event.target.querySelector("#first-name")
  //let firstNameInput = form[0];
  let firstNameInput = form.firstName;
  let lastNameInput = form.querySelector("#last-name");
  let emailInput = form[2] 
  
  if(firstNameInput.value === ""){
    alert("What?!?! Do you really not have a first name?? Nah bro. Go back and put a first name!")
  } else {
    // ADD NEW ROW TO TABLE (DOM MANIPULATION)
    addInstructor(firstNameInput.value, lastNameInput.value, emailInput.value);

    // RESET THE FORM'S INPUT FIELDS  
    form.reset()
    // firstNameInput.value = ""
  }
}

function handleEmailClick(e){
  e.stopPropagation();
  console.log("email was clicked")
  e.target.style.color = "blue"
}

function selectInstructor(e){
  let row = e.currentTarget;
  console.log(row.innerText)
  document.querySelector("span").innerText = row.innerText
}

function addInstructor(firstName, lastName, email){
  const tbody = document.getElementById("table-body");
  // tbody.innerHTML += `
  //   <tr>
  //     <td class="first-name">${firstName}</td>
  //     <td>${lastName}</td>
  //     <td>${email}</td>
  //   </tr>
  // `
  const rowElement = document.createElement("tr");
  tbody.appendChild(rowElement);
  rowElement.addEventListener("click", selectInstructor)

  const firstNameEl = document.createElement("td");
  const lastNameEl = document.createElement("td");
  const emailElement = document.createElement("td");
  rowElement.append(firstNameEl, lastNameEl, emailElement)

  firstNameEl.innerText = firstName;
  lastNameEl.innerText = lastName;
  emailElement.innerText = email;
  emailElement.addEventListener("click", handleEmailClick)
}

/*

let divElement = document.createElement("div");
divElement.innerHTML = `<p><span></span></p>`

*/