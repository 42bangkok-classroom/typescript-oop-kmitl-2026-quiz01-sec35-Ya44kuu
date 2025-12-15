export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if(n >= 80 && n <= 100){
    console.log(`Grade is A`);
}else if (n >= 70){
    console.log(`Grade is B`);
}
else if (n >= 60){
    console.log(`Grade is C`);
}
else if (n >= 50){
    console.log(`Grade is D`);
}
else if (n < 50 && n >= 0){
    console.log(`Grade is F`);
}
else {
    console.log(`Invalid Input`);
}
