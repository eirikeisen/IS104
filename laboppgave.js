function melding(selectobj){
 var lang = document.getElementById("velg");
 var e_outputbox = document.getElementById("text");
 e_outputbox.innerHTML = "Du har valgt programmeringsspråket " + lang.options[selectobj.selectedIndex].text;
}

function popup(){
alert("Denne siden er under konstruksjon");
}