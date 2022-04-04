

const pizza = ["masa","salsa","queso","jamon","oregano","huevo","anchoa","rucula","tomate","salame"]
const par = []
const impar = []


function paroImpar() {
    for (i=0;i<pizza.length; i++)
        if (pizza[i].length % 2 === 0)
          (par.push(pizza[i]))
          
        else
            (impar.push(pizza[i]))
}

paroImpar(pizza)
console.log("los elementos pares son",par)
console.log("los elementos impares son",impar)