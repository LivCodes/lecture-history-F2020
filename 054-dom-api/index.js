
function addInstructor(firstName, lastName, email){
  // create a new tr and adding it to tbody
  const trEl = document.createElement("tr");
  const tbody = document.getElementById("table-body");
  tbody.appendChild(trEl);

  //creating 3 td and adding them to tr
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  trEl.append(td1, td2, td3)

  //update the text inside the element
  td1.innerText = firstName;
  td2.innerText = lastName;
  td3.innerText = email;
}


//parentNode.removeChild()