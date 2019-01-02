var composers = ["Bach", "Mozart", "Chopin", "Beethoven"];

function loadComposer(){
    document.getElementById("composer").innerHTML= composers;
}

function addComposer(){
    var composer = prompt("What's your favourite composer?") //aggiungo un nuovo valore e lo conservo nella var
    composers[composers.length]= composer//modifico l'array composers con i nuovi elementi aggiunti all'array composer
    document.getElementById("composer").innerHTML= composers;//stampo il nuovo array
}