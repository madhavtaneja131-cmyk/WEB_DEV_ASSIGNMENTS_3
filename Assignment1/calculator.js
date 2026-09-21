function add(a,b){
    return Number(a)+Number(b)
}
function sub(a,b){
    return Number(a)-Number(b)
}
function mul(a,b){
    return Number(a)*Number(b)
}
function div(a,b){
    return Number(a)/Number(b)
}

module.exports = {add,sub,mul,div};

let operation = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];

let result;

if(operation === "add"){
    result = add(num1,num2);
} else if(operation === "sub"){
    result = sub(num1,num2);
} else if(operation === "mul"){
    result = mul(num1,num2);
} else if(operation === "div"){
    result = div(num1,num2);
} else {
    console.log("Invalid operation");
}

console.log("Result:", result);