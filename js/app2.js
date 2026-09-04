let dia = prompt("Escolha um dia na semana\nSendo 1:Domigo - 7:Sábado")
dia = Number(dia);
if (dia <=0 || dia >=8){
    alert("Dia inválido")
}else if(dia == 1){
    ("Você escolheu domingo");
}else if(dia == 2){
    ("Você escolheu segunda");
}else if(dia == 3){
    ("Você escolheu terça");
}else if(dia == 4){
    ("Você escolheu quarta");
}else if(dia == 5){
    ("Você escolheu quinta");
}else if(dia == 6){
    ("Você escolheu sexta");
}else if(dia == 7){
    ("Você escolheu sábado");
}