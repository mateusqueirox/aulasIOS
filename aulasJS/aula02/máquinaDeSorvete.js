// let sabor1 = 'morango'
// let sabor2 = 'sensação'
// let sabor3 = 'churros'

// let saborEscolhido = sabor2 

// if (saborEscolhido == sabor1) {
//     console.log("Chefia! Seu sorvete de ", sabor1,  "está pronto"); 
// }
// else if (saborEscolhido == sabor1) {
//     console.log("Chefia seu sorvete de ", sabor2, "está pronto");
// } 
//     else {
//         console.log("Chefia! seu sorvete de ", sabor3, "está pronto");
//     } 

//Correção:

let sabor1 = 'morango'
let sabor2 = 'sensação'
let sabor3 = 'churros'

let saborEscolhido = sabor3 

if (saborEscolhido == sabor1) {
    console.log("Chefia! Seu sorvete de ", saborEscolhido,  "está pronto"); 
}
else if (saborEscolhido == sabor2) {
    console.log("Chefia seu sorvete de ", saborEscolhido, "está pronto");
} 
    else if (saborEscolhido == sabor3) {
        console.log("Chefia! seu sorvete de ", saborEscolhido, "está pronto");
    } 
else {
    console.log("Sabor sabor inválido");
}