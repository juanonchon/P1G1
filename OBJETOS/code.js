
function VerPersonas(){
    var persona = new Persona()

    persona.SetNombre("Adrian Douglas")

    var name = persona.GetNombre()
    

    if(persona.GetEdad() > 18){
        alert("Mayor de edad")

    }else{
        alert("Vuelva pronto")
    }
    alert(name)
}