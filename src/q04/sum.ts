export{};
let args = process.argv.slice(2);
let a = Number(args[0]);
let sum = 0;
if(a < 0 || isNaN(a)){
    console.log("Invalid Input");
    process.exit();
}
for(let i = 1;i <= a ;i++){
    sum += i;
}
console.log(String(sum))
