function factorialN() {

    var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de N es" + resp)
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            alert("Factorial de N es: " + resp)
        }
    } else {
        alert("No factorial de un negativo")
    }
}

function mayorAyB() {
    var A = parseInt(prompt("ingrese A", 10))
    var B = parseInt(prompt("ingrese B", 7))
    if (A == B) {
        alert("son iguales")
    } else {
        if (A > B) {
            alert("el mayor es A:" + A)
        } else {
            alert("el mayor es B:" + B)
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("ingrese A", 21))
    var B = parseInt(prompt("ingrese B", 4))
    var resultado
    resultado = A / B
    alert(parseInt(resultado))

}
function obtenerMod() {
    var A = parseInt(prompt("ingrese A", 21))
    var B = parseInt(prompt("ingrese B", 4))
    var resultado
    resultado = A % B
    alert(parseInt(resultado))

}

function obtenerCatidadDigitoN() {
    var N = parseInt(prompt + ("Ingrese N", 9478324))
    var resp = 0
    var cantidad = 0
    while (N != 0) {
        N = parseInt(N / 10)
        cantidad = cantidad + 1
    }
    alert("digitos: " + cantidad)

}

function mostrarDigN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        alert(dig)
        N = parseInt(N / 10)
    }

}    

function existeDigitoN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        if(dig == 3){
            alert("Existe el dig 3")
        }
        N = parseInt(N / 10)
    }

}    

function calcularTrapecio() {
    var h = parseInt(prompt("Ingrese h", 10 ))
    var b = parseInt(prompt("Ingrese h", 5 ))
    var B = parseInt(prompt("Ingrese h", 15 ))
    var a = parseInt(prompt("Ingrese h", 10 ))
    var c = parseInt(prompt("Ingrese h", 7 ))
    var area = 0
    var perimetro = 0
    area = ((b + B) / 2) * h
    perimetro = a + b + B + c
    alert("El area es:" + Area)
    alert("El perimetro es:" + Perimetro )
}

function determinarNesParoImpar(){
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0) {
        alert(N + " es par.")

    }
}



function ifNormal() {
    var N = parseImt(prompt("Ingrese N"))
    if (N > 5){
        N = 10
    } else {
        N = 1
    }
    alert(N)
}


function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N"))
    N = (N > 5) ? 10 : 1
    alert(N)

    
    }
/*
    var N = parseInt(prompt + ("Ingrese N", 9478324))
    var resp = 0
    var cantidad = 0
    while (N != 0) {
        N = parseInt(N / 10)
        cantidad = cantidad + 1
    }
    alert("digitos: " + cantidad)
*/
    function obtenerCantidadDigN_FOR(){
        var N = parseInt(prompt("Ingrese N"),9478324)
        var cantidad
        for (cantidad =0; N != 0;cantidad++) {
            N = parseInt(N / 10)
        }
        alert ("digitos:" + cantidad)
    }

function NmultiploDeM() {
    var N = parseInt(prompt("Ingrese N:", 10))
    var M = parseInt(prompt("Ingrese M:", 5))

    if ((N % M) == 0) {
        alert(N + " es multiplo de" + M)
    } else {
        alert(N + " no es multiplo de" + M)
    }
    
    
}

function sumaDigMultiplos3deN() {
    var N = parseInt(prompt("Ingrese N", 23462314))
    var sum = 0
    var dig = 0
    while (N != 0) {
        dig = parseInt (N % 10)
        alert(dig)//IF sumar los multiplo de 3
        if ((dig % 3) == 0){
            sum = sum + dig

        }else{
            //nada
        }
        N = parseInt(N / 10)
    }
}

function sumarAyBincluidoAyB() {
    var A = parseInt(prompt("ingrese A", 3))
    var B = parseInt(prompt("ingrese B", 9))
    var suma = 0

    while (B >= A) {
        alert(A)
        suma = suma + A 
        A = A + 1
         
    }
    alert (suma)

}

function promedioNdeNotas() {
    var N = parseInt(prompt("Ingrese N", 15))
    var sumaNota = 0
    var i = 0
    while(N > i) {
        i = i + 1
        var nota = parseInt(prompt("Ingrese Notas", 80))
        sumaNota = sumaNota + sumaNota

    }
    alert(sumaNota/N)
}

