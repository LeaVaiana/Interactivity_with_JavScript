var grades = [5,3,6, ,8, ,2];           //Definiamo l'array di cui vogliamo calcolare la media
var sum = 0; 
var count = 0;                          //Variabile che contiene solo il numero dei valori validi, non considera gli undefined elements

if (grades.length > 0){
    for (i=0; i< grades.length; i ++){
        if (grades[i] != undefined) {   //aggiungiamo un if statement per selezionare solo i valori validi
            sum += grades[i];
            count = count + 1;          // in questa variabile, che definisco anche sopra, sommo solo il numero di volte che ho trovato un valore valido
        }
        
    }
    document.write(sum/count);          //grades.length viene sostituito dalla variabile count
}else{
    document.write("EMPTY ARRAY");
}




