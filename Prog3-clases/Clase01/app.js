let subject = 'JavaScript';
let year = 2025;
let favoriteSites = ["https://openai.com", "https://google.com", "https://github.com"];

let person = {
  name: "Mike",
  lastName: "Wazowski",
  age: 37,
};
console.log("Hola mi nombre es " + person.name + " " + person.lastName + " y tengo " + person.age + " años.");

person.sites = favoriteSites

console.log(person.sites)
console.log(person.sites[1]);

let saludar = () => "hola";
console.log(saludar())

let multiplicar = (a, b) => a * b;
console.log(multiplicar(2,4));

() => "soy una funcion anónima";

let esPar = (num) => num%2 === 0;
console.log(esPar(5));

let calcularAniosPerrunos = (num) => {
    let aniosPerrunos = num * 7;
    return `el perro tiene ${aniosPerrunos} años perrunos`;
}
console.log(calcularAniosPerrunos(5));

let celciusAFahrenheit = (temp) => {
    let fahrenheit = (temp * 2) + 30;
    return `${temp} grados Celsius son ${fahrenheit} grados Fahrenheit`;
}
let fahrenheitACelcius = (temp) => {
    let celcius = (temp - 30) / 2;
    return `${temp} grados Fahrenheit son ${celcius} grados Celsius`;
}
console.log(celciusAFahrenheit(30));
console.log(fahrenheitACelcius(30));

let persona = {
    nombre: "Lucas",
    apellido: "Fierro",
    edad: 19,
    ciudad: "Buenos Aires",
}

let numeros = [1, 5, 7, 12, 89, 23];	
let numerosDobles = numeros.map((num) => num *2);
console.log(numerosDobles);

let numeroAString = numeros.map((num) => num.toString());
console.log(numeroAString);

let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];
let nombresMayus = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayus);


let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
     {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];
let soloNombre = personas.map((personas) => (personas.nombre));
console.log(soloNombre);

let matrix = personas.map((x) => (x.edad >= 60 ? `${x.nombre} puede entrar a la Matrix` : `${x.nombre} es demasiado peque`));
console.log(matrix);

let HTML = personas.map((persona) => `<h2>${persona.nombre}</h2><p>${persona.edad}</p>`);
console.log(HTML);

let numerosDos = [66, 3, 2, 5, 26, 101];
let cincoOMas = numerosDos.filter((edad) => (edad >= 5));
console.log(cincoOMas)

let pares = numerosDos.filter((edad) => (edad % 2 === 0));
console.log(pares);

let words = ["dog", "wolf", "by", "family", "eaten", "camping"];
let menosDeCinco = words.filter((x) => (x.length < 5));
console.log(menosDeCinco);

let listaPersonas = [{ nombre: "Angelina Jolie", afiliado: true },
{ nombre: "Eric Jones", afiliado: false },
{ nombre: "Paris Hilton", afiliado: true },
{ nombre: "Kayne West", afiliado: false },
{ nombre: "Bob Ziroll", afiliado: true }];

let miembroIlluminati = listaPersonas.filter((x) => (x.afiliado == true));
console.log(miembroIlluminati);

let a = miembroIlluminati.map((x) => x.nombre);
console.log(a);