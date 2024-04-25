                                        typescript

day-1 25-april-2024

-node is reqired install node to trun "typescript"
open terminal
first step check : node -v
>v20.2.2
first step check : npm -v
>8.2.2
open git bash:

// install typescript globally

>npm i -g typescript
Open single pack will addd
>tsc -v     // this version to find typescriptis install are not


So the "tsc(typescript)" is required to run the .ts in termial


file name : <filename>.ts

So typescript is an javascript program were it an "Static checking" 

* So static checking means It will show an error when we type  or assign any not created fiels

example: 
let user = { name : "Str", age: 12}
let emailPrint = user.email // this like code so error before compiling  or runing the code.

Because there is no such an 'email' in the 'user variable'.
But i 'javascript' we can find this error after the code run in the console Erros.

PS D:\typescript> tsc intro.ts 
It will create an 
