import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let registro;
let numero_alunni = Number.parseInt(prompt("Numero alunni: "));
console.log("\n")

registro = memorizzaUtenti(numero_alunni);
console.log(registro)

console.log("\nNumero alunni maggiorenni: " + contaAlunni(registro));

console.log("\nNome alunni maggiorenni: ")
stampaAlunni(registro);


function memorizzaUtenti(numero_alunni){
    let oggetto;
    
    let utenti = Array.of(numero_alunni);

    for(let i = 0; i < numero_alunni; i++){
        oggetto = {
            "Nome" : prompt("Nome alunno: "),
            "Eta"  : Number.parseInt(prompt("Età alunno: ")),
        }
        utenti[i] = oggetto;
    } 
    return utenti;   
}

const contaAlunni = (registro) =>{
    let cont = 0;
    registro.forEach(oggetto => {
        if(oggetto.Eta >= 18) cont++;
    });
    return cont;
}

const stampaAlunni = function(registro){
    registro.forEach(oggetto => {
        if(oggetto.Eta >= 18) console.log(oggetto.Nome);
    });
}