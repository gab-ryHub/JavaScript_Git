import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import * as u from "./utils.js";

let scelta = 0;
let registro;

do{
    console.log("\nMenù.\n 1-Memorizza alunni.\n 2-Conta alunni.\n 3-Stampa alunni maggiorenni.\n 4-Uscita");
    scelta = Number.parseInt(prompt("Fai una scelta: "));

    switch(scelta){
        case 1:
            let numero_alunni = Number.parseInt(prompt("Numero alunni: "));
            console.log("\n")
            registro = u.memorizzaUtenti(numero_alunni);
            console.log(registro)
            break;
        case 2:
            console.log("\nNumero alunni maggiorenni: " + u.contaAlunni(registro));
            break;
        case 3:
            console.log("\nNome alunni maggiorenni: ")
            u.stampaAlunni(registro);
            break;
        case 4:
            console.log("\nUscita");
            break;
    }
}while(scelta != 4);