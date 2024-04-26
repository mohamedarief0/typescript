//Type-annotation
// Using this annotation are has some sepcfic places
// "use wisly". Don't just add all the varaible assigning
// typescript will know what it was even those we are not infere

// let <variableName>:<Type> = "value"   // this type is know as type -annotation
// string annotation 
let greeting: string = "Hello Arief!!";
// let greeting = "Hello Arief!!";   good
greeting.toLowerCase();
console.log(greeting);

// number annotation
let myNum:number = 3;
// let myNum:number = 3;    good

//boolean annotation
let isLoggIn: boolean = true // or false
// let isLoggIn = true // or false    good


export{}