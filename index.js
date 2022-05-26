

function register() {
  let homeOwner = document.querySelector("input[name='homeOwner']").value;
  let homeType = document.getElementById("homeType").value;
  let homeArea = document.querySelector("input[name='homeArea']").value;
  let homeStatus = document.querySelector("input[name='homeStatus']").checked;


  //const userHome = new home(homeOwner, homeType, homeArea, homeStatus)

  var list = document.querySelector("ul")
  var spanStatus = document.createElement("span")


  if (homeStatus == true) {
    spanStatus.innerText = "Alugado"
    spanStatus.style.backgroundColor = "orange"
   
  } else if(homeStatus == false) {
    spanStatus.innerText = "Disponivel"
    spanStatus.style.backgroundColor = "green"
   
  }
 
  console.log(homeStatus)

  var deleteButton = document.createElement("button")
  deleteButton.innerText = "Remover"
  deleteButton.type = "button"
  deleteButton.setAttribute("onclick", "deleteHome(this)")
  deleteButton.className = "deleteButton"


  var divHome = document.createElement("div")
  var liHome = document.createElement("li")

  liHome.innerText = ("\nProprietario: " + homeOwner + "\nTipo de Imovel: " + homeType + "\nArea: " + homeArea + "\n")
  divHome.className = "homeDiv"

  divHome.appendChild(spanStatus)
  divHome.appendChild(liHome)
  divHome.appendChild(deleteButton)
  list.appendChild(divHome)

  homeOwner = document.querySelector("input[name='homeOwner']").value = "";
  homeType = document.getElementById("homeType").value = "";
  homeArea = document.querySelector("input[name='homeArea']").value = "";
  homeStatus = document.getElementById("homeStatus").checked = false;


}

function deleteHome(button){
  let li = button.parentNode
  document.querySelector("ul").removeChild(li)
 }