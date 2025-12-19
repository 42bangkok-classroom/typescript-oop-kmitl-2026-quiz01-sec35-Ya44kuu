import { write } from "node:fs";

export{};
let args = process.argv.slice(2);
let balance = Number(args[0]);
let witda = Number(args[1]);
if(isNaN(balance)|| isNaN(witda)){
    console.log("Invalid Input");
}
else if (balance < witda){
    console.log("Insufficient balance");
}
else if (witda > 5000 ){
    console.log("Exceeds per-withdrawal limit");
}else{
    console.log("Withdrawal approved");
}