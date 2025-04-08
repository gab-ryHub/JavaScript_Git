import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import * as u from "./utils.js";

let registro;
let numero_alunni = Number.parseInt(prompt("Numero alunni: "));

console.log("\n")

registro = u.memorizzaUtenti(numero_alunni);
console.log(registro)

console.log("\nNumero alunni maggiorenni: " + u.contaAlunni(registro));

console.log("\nNome alunni maggiorenni: ")
u.stampaAlunni(registro);
