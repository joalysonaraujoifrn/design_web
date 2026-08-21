var nasc = 2008;
let nome = "Joalyson";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro da função - Idade ${idade}`);
    return idade;
}

calcIdade();
alert(`Fora da função : chamando calcIdade ${calcIdade(2027)}`);