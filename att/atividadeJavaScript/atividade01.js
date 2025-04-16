let nota = [1 + 0 + 10]
let media = nota/3
let mediaDecimal = media.toFixed(2)

if (mediaDecimal > 10){
    alert("É IMPOSSÍVEL tirar mais que 10.");
    
}

else if (mediaDecimal > 7) {
   alert("APROVADO!!! Sua média foi: " + mediaDecimal + "Parabéns pelo seu empenho. 🎉🥳");
}

else {
    alert("REPROVADO!!! Sua média foi: " + mediaDecimal);
    
}