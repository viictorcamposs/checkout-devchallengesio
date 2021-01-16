// pegar o elemento na pagina

// ao clicar no elemento quero que chame uma function 

// dentro da function, vai ler o valor que encontra dentro do elemento que sera manipulado

// se clicar no button de aumentar ou diminuir produtos,
//vai multiplicar o valor do produto pela quantidade

// o resultado da multiplicacao ira enviar de volta para a pagina

const totalValue = document.getElementById('totalValue');
const qtdOfProduct = document.getElementsByClassName('qtdOfProduct');
const shoppingForm = document.getElementById('shoppingForm');

let vintageProduct = {
  qtd: 1,
  cost: 54.99,
}
let leviShoesProduct = {
  qtd: 1,
  cost: 74.99
}

function handleSubmit(e) {
  alert('Compra finalizada com sucesso!')
  e.preventDefault()
};

function manipulateProductValue(product, addOrRemove) {
  if(addOrRemove === 'add') {
    product === 'vintage' ?
    qtdOfProduct[0].innerHTML = String(vintageProduct.qtd += 1) :
    qtdOfProduct[1].innerHTML = String(leviShoesProduct.qtd += 1)
  } else {
    if(product === 'vintage') {
      vintageProduct.qtd === 0 ?
      qtdOfProduct[0].innerHTML = String(vintageProduct.qtd) :
      qtdOfProduct[0].innerHTML = String(vintageProduct.qtd -= 1)
    } else {
      leviShoesProduct.qtd === 0 ?
      qtdOfProduct[1].innerHTML = String(leviShoesProduct.qtd) :
      qtdOfProduct[1].innerHTML = String(leviShoesProduct.qtd -= 1)
    } 
  }

  totalValue.innerHTML = `$${(
    ((vintageProduct.qtd * vintageProduct.cost) +
    (leviShoesProduct.qtd * leviShoesProduct.cost)
    + 19).toFixed(2)
  )}`
};

qtdOfProduct[0].innerHTML = String(vintageProduct.qtd)
qtdOfProduct[1].innerHTML = String(leviShoesProduct.qtd)
totalValue.innerHTML = `$${(
  (vintageProduct.qtd * vintageProduct.cost) +
  (leviShoesProduct.qtd * leviShoesProduct.cost)
  + 19
)}`