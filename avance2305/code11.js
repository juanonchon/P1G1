code.js 

function promedioNdeNotas() {
    var N = parseInt(prompt("Ingrese N", 12))
    var sumaNota = 0
    var i = 0
    while(N > i){
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota", 51))
        sumaNota = sumaNota + nota
    }
    alert(sumaNota/N)
}