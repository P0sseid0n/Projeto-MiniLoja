let CartView = document.querySelector(".total")

let CartBTN = document.querySelector("#shop")

CartBTN.addEventListener("change", OpenCart)

// Função para abrir/fechar carrinho

function OpenCart(){
    if(CartBTN.checked){
        CartView.style.display = "block"
    }
    else{
        CartView.style.display = "none"
    }
}

const Products = [
    {
        id: 0,
        name: "Produto 1",
        preco: 10,
        quantity:0
    },
    {
        id: 1,
        name: "Produto 2",
        preco: 15,
        quantity:0
    },
    {
        id: 2,
        name: "Produto 3",
        preco: 25,
        quantity:0
    },
    {
        id: 3,
        name: "Produto 4",
        preco: 10,
        quantity:0
    },
    {
        id: 4,
        name: "Produto 5",
        preco: 15,
        quantity:0
    },
    {
        id: 5,
        name: "Produto 6",
        preco: 25,
        quantity:0
    }
]

//Cria os produtos na loja usando os dados acima

let Create = () =>{
    let chooser = document.querySelector(".loja")
    Products.map((product)=>{
        chooser.innerHTML+=`
        <div>
            <div class="produto-compra">
                <div class="img-produto"></div>
                <div>
                    <h3>${product.name}</h3>
                    <p>R$${product.preco},00</p>
                </div>
                <div>
                    <button id="${product.id}" class="AddCart">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
        `
    })
    chooser.innerHTML+=`
        <div class="clear"></div>
    `
}
Create()

//Adiciona o produto no carrinho

let Cart = document.querySelector(".conta")
let Added = []
let LoadCart = () =>{
    Cart.innerHTML= ""
    Added = []
    Products.map((product) => {
        if(product.quantity > 0){
            Added.push(product.id)
            document.querySelector(".PCart").innerHTML = addzero(Added.length, 2) 
            Cart.innerHTML+= `
            <div class="produto">
                <h3>${product.name}</h3>
                <p>Quantidade: ${product.quantity}</p>
                <p>Preço: ${product.preco * product.quantity}</p>
            </div>
            `  
        }
    })
}



let AddBtn = document.getElementsByClassName("AddCart")
for(let n = 0; n < AddBtn.length; n++){
    AddBtn[n].addEventListener("click",function (){
        let id = this.getAttribute("id")
        Products[id].quantity++
        LoadCart()
    })
}

//Escreve que o carrinho está vazio

let CheckCart = () =>{
    Cart.innerHTML= ""
    Cart.innerHTML= `
    <div class="produto">
        <h4>O carrinho está vazio</h4>
    </div>
    `
}
CheckCart()

let DeleteCart = document.querySelector("#DeleteCart")
DeleteCart.addEventListener("click",() => {
    Products.map((product) => {
        product.quantity = 0
    })
    Added = []
    document.querySelector(".PCart").innerHTML = addzero(Added.length, 2) 
    CheckCart()
})

let addzero =(n, width, z) => {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
