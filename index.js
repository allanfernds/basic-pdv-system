

function register() {
  let product = document.querySelector("input[name='product']").value;
  let price = parseFloat(document.querySelector("input[name='price']").value);
  let total = document.querySelector("input[name='total']");
  let value = parseFloat(total.value)
  total.value = value + price
  let data = new Date();

  let hora    = data.getHours(); 
  let min     = data.getMinutes(); 
  let str_hora = "[" + hora + ':' + min + "]  ";        

//---------------------------------------------------
  let totalSection = document.createElement("h4")
  let product_li = document.createElement("li");
  product_li.innerText = (str_hora + "Produto: " + product + '  ||  ' +"Preço: " + price +" R$")
  let selledList = document.getElementById('list-section')
//---------------------------------------------------




  selledList.appendChild(product_li)
  selledList.appendChild(totalSection)
 
  
  product = document.querySelector("input[name='product']").value = "";
  price = document.querySelector("input[name='price']").value = 0 ;
}
