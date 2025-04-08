import PromptSync from 'prompt-sync';

const prompt = PromptSync();

export function memorizzaUtenti(numero_alunni){
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

export const contaAlunni = (registro) =>{
    let cont = 0;
    registro.forEach(oggetto => {
        if(oggetto.Eta >= 18) cont++;
    });
    return cont;
}

export const stampaAlunni = function(registro){
    registro.forEach(oggetto => {
        if(oggetto.Eta >= 18) console.log(oggetto.Nome);
    });
}

export const eliminaAlunni = function(registro){
    registro.map((oggetto, i) =>{
        if(oggetto.Eta >= 10)
            registro.splice(i, 1);
    })
    return registro
}