let Produto1 = Number(prompt("Informe o valor do primeiro produto:"));
let Produto2 = Number(prompt("Informe o valor do segundo produto:"));

if(Produto1 == Produto2){
    let desconto = (Produto1 + Produto2) -5
    alert(desconto)
}else{
    let desconto1 = Produto2 + Produto1
    alert(desconto1)
}
