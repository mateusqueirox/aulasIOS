let nota = 59;

if (nota > 100){
    console.log("Não é possível tirar uma nota maior que 100");
    
}
else if (nota >= 90 && nota <= 100) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou A!`);
}
else if (nota >= 80 && nota < 90) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou B!`);
}
else if (nota >= 70 && nota < 80) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou C!`);
}
else if (nota >= 60 && nota < 70) {
    console.log(`Parabéns! Com a sua nota ${nota}, você tirou D!`);
}
else {
    console.log(`Com a sua nota ${nota}, você tirou F!`);
}

