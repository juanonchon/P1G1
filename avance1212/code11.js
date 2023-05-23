code.js 

function promedioNdeNotas() {
    var N = parseInt(prompt("Ingrese N", 15))
    var sumaNota = 0
    var i = 0
    while(N > i){
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota", 80))
        sumaNota = sumaNota + nota
    }
    alert(sumaNota/N)
}