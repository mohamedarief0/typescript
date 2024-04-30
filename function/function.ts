// any annotating. So please avoide 'any' type.
let hero;
function getHero() {
    return 5
}
hero = getHero()


// removing any in the below code.
function vlaue(a:number){
    return a + 5
}
vlaue(5)


function greet(name: string, num: number) {
    console.log ("Hi" + name + "is your number Id:" + num);
}  
greet("Arief", 112)


// normal function
function isSignIn(name: string, email: string, isPaid : boolean = false){

}
isSignIn("Arief", "a@demo.com")


// arrow function
let variable = (s:string):string=>{
    return ""
}
let isLogIn =(name: string, email: string, isPaid: boolean)=>{ }
isLogIn("Arief","email.com",true)


let marvelHeros = ["thor", "caption","ironman"]
 marvelHeros.map((hero)=>{})


export{}