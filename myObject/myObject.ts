// 1
let user = {name:"Arief", email:"abc@gmail.com", isActive:true}
// I havent set the type for email even though it is working with out error
function createUser({name:string, isActive:boolean}){}
createUser(user)

// syntex for object 
function createCourse():{name: string, price:number}{
    return {name:"reactjs",price:1999}
}
createCourse()

// 2
// Aliases
// it is used because it will store longer type of the annotation
type user = {
name: string;
email: string;
isActive: boolean;
price: number;
}

function userDetails(userId:user):user{
    return {name:"Arief", email:"Arief", isActive:true, price:199}
}
userDetails({name:"Arief", email:"Arief", isActive:true, price:199})



export{}