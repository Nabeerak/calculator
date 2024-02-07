import promptSync from 'prompt-sync';

const prompt = promptSync();

let no1: number = prompt("Enter ur 1st no here:");
let no2: number = prompt("Enter ur 2nd no here:");
let operation = prompt("'for operation: +,-,*,/'");

if(operation=== '+'){
    console.log("addition:",no1 + no2 )
}else if(operation=== '-'){
    console.log("substraction:",no1 - no2 )
} else if(operation=== '*'){
    console.log("multiplication:",no1 + no2 )
} else if(operation=== '/'){
    console.log("division:",no1 / no2 )
    if(no2 == 0){
        console.log("syntax error")
    }}
else {
    console.log("error")
};


