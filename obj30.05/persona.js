//1.- NOMBRE DE LA CLASE
class Persona{
    //2.- PROPIEDAD
    carnet = 0
    carnet = ""
    carnet = 0

    //3.-CONSTRUCTOR
    constructor() {
        this.carnet = 1234567
        this.nombre = "MyNombre"
        this.edad = 100
    }

    //4.- SETTERS AND GETTERS - DAR Y OBTENER UN VALOR
    GetCarnet() {
        return this.carnet    
    }

    GetNombre() {
        return this.nombre   
    }

    GetEdad() {
        return this.edad 
    }

    SetCarnet(valor){
        this.carnet = valor
    }

    SetNombre(valor){
        this.nombre = valor
    }

    setEdad(valor){
        this.edad = valor
    }
    //5.- LOS METODOS DE LA CLASE, 0 ... N

    toString(){
        return this.GetCarnet()
        + " "
        + this.GetNombre()
        + " "
        + this.GetEdad()
    }

    ContarVocales(){
        var cadena = THIS.GetNombre()
        var longitudCad = cadena.length
        var i = 0
        var contar = 0
        while (longitudCad > i) {
            var caracter = cadena[i]
            i++
            if (caracter == 'a'
            || caracter == 'e'
            || caracter == 'i'
            || caracter == 'o'
            || caracter == 'u') {
                contar = contar + 1
            }
            //alert(caracter)
        }
        //alert("La frecuencia de 'a, e, i' es: " + contar)
        return contar
    }
}

