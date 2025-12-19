export{};
let args = process.argv.slice(2);
let n = args[0].toLowerCase();
let a = Number(args[0]);
let b = Number(args[0]);
if(isNaN(a) || isNaN(b)){
    console.log("Invalid input");
    process.exit();
}
switch(n){
    case "add":console.log(String(a + b)) ;break;
    case "sub":console.log(String(a - b)) ;break;
    case "mul":console.log(String(a * b)) ;break;
    case "div":
        if(b === 0){    
            console.log("Invalid input");
            process.exit();
        }
        console.log(String(a / b)) ;break;
    default: console.log("Invalid operator");break;
}