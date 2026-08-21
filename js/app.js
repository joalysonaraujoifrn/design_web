var nasc = 2008;
let nome = "Joalyson";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro da função - Idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora da função : Idade ${idade}`);
Erro pois a variável let não existe fora do escopo dela
*/
alert(`Fora da função : chamando calcIdade ${calcIdade(2027)}`);