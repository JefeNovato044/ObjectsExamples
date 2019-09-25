var Animal = {
    philo: "Perro", 
    nombre:"Mishu" ,
    edad: 50,
    saludar : function (){
        console.log("Hola soy un " + this.philo + " que habla," + " y mi nombre es " + this.nombre);
    }
}

class Sujeto {
    //Constructor de objeto
    constructor (nombre, edad, personalidad, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.personalidad = personalidad;
        this.altura = altura;
    }

    //Metodo de objeto
    presentarse (){ 
       console.log("Hola soy " + this.nombre + " tengo " + this.edad + " años, mido " + this.altura + " metros y mi personalidad es del tipo " + this.personalidad + ".");
       return 0; 
    }
}

//Una clase hijo de Sujeto
class Mujer extends Sujeto{
    
    constructor(nombre, edad, personalidad, altura,colorFalda){
        super(nombre, edad, personalidad, altura) //Heredar variables de objeto padre.
        this.colorFalda = colorFalda;
    }

    presentarse(){
        console.log("Hola soy " + this.nombre + " tengo " + this.edad + " años, mido " + this.altura + " metros y mi personalidad es del tipo " + this.personalidad + " y mi falda es " + this.colorFalda + ".");
    }
}


    //Modificar los parametros del objeto
    Animal.philo = "Gato";
    
    //Llamar al metodo saludar del objeto animal
    Animal.saludar();

    Animal.atacar = function (){ //Agregar un nuevo metodo al objeto
        console.log("Soy un " + this.philo + " y te voa a tacar");
    }

    Animal.atacar();


    //Crear un nuevo objeto con el constructor
    NPC1 = new Sujeto("Jefe", 24, "INTP", 2.14);

    NPC1.presentarse();

    NPC2 = new Mujer("Gorrión", 24, "INTP", 2.00,"azul")
    
    NPC2.presentarse(); 
    
