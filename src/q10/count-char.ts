export{};
let args = process.argv.slice(2);
let len = args.length;
let num = 0;
let letter = 0;
let other = 0;

// console.log(Number(args[0]))
if(len === 0){
    process.exit();
}
for(const input of args){
    if(input === ""){
        process.exit();
    }
    for(const char of input){
        if(/[a-zA-Z]/.test(char)){
            letter += 1;
        }else if(/[0-9]/.test(char)){
            num += 1;
        }else{
            other += 1;
        }
    }
}
console.log(`
Letters: ${letter}
Digits: ${num}
Others: ${other}`
)