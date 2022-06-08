// Javascript Portfolio

// XO Lines
let input = window.prompt("Input number (1-40)");
let text = "";
if (input >= 1 && input <= 40){
    //input: 1 => X, 2 => XO, 3 => XOX
    for (let i=1; i<=input; i++){
        if(i %2 != 0){
            text += "X";
        }else{
            text += "O";
        }
    }
    console.log(text);
}else{
    console.log("Wrong Input");
}

// Meet in The Middle
let input = "makan";
let inputKecil = input.toLowerCase();
let batas = inputKecil.length;
let pasangan = "";
let j = 1;

if(batas %2 == 0){
    for(let i=0; i<(batas/2); i++){
        pasangan = inputKecil.charAt(i) + inputKecil.charAt(batas-j);
        j++;
        console.log(pasangan);
    }
}else{
    for(let i=0; i<(batas/3); i++){
        pasangan = inputKecil.charAt(i) + inputKecil.charAt(batas-j);
        j++;
        console.log(pasangan);
    }
}

let input = "codingid";
for (let limit = 0; limit < Math.floor((input.length/2)); limit++){
    console.log(input[limit] + input[(input.length-1)-limit]);
}

// Astronomy Book
let input = "14016914990";
let digit = input.length;
let total = 0;

if(digit == 10 && Number(input)){
    for(let i=0; i<digit; i++){
        total += parseInt(input[i]);
    }
    if(total %11 == 0){
        console.log("Legal ISBN");
    }else{
        console.log("Ilegal ISBN");
    }
}else{
    console.log("Wrong ISBN");
}

// Fruit Store
let input1 = 1;//w
let input2 = 5;//m
let input3 = 10;//o
let input4 = 1;//p
let money = 200000;
let total = 0, change = 0;
const fruitsData = [
    {
        code: "W",
        name: "Watermelon",
        price: 15000
    },
    {
        code: "M",
        name: "Melon",
        price: 23000
    },
    {
        code: "O",
        name: "Orange",
        price: 2000
    },
    {
        code: "P",
        name: "Papaya",
        price: 10000
    },
];

for(let i=0; i<fruitsData.length; i++){
    if(fruitsData[i].code === "W"){
        total += fruitsData[i].price * input1;
    }
    if(fruitsData[i].code === "M"){
        total += fruitsData[i].price * input2;
    }
    if(fruitsData[i].code === "O"){
        total += fruitsData[i].price * input3;
    }
    if(fruitsData[i].code === "P"){
        total += fruitsData[i].price * input4;
    }
}
console.log(`Total: ${total}\nChange: ${money - total}`);

// Number Rows
let input1 = 5;
let input2 = "Desc";
let output = "";

if (parseInt(input1) && input2 === "Asc"){
    for(let i=1; i<=input1; i++){
        output += i+" ";
    }
}else if (parseInt(input1) && input2 === "Desc"){
    for(let i=input1; i>=1; i--){
        output += i+" ";
    }
}else{
    output = "Wrong Input";
}
console.log(output);

// Compounding
let input = ("abcde").toLowerCase();
let output = input.split("");

if(input){
    for (let i=0; i<output.length; i++){
        // output[i] = output[i][0].toUpperCase() + output[i].repeat(i);
        output[i] = output[i].charAt(0).toUpperCase() + output[i].repeat(i);
    }
    console.log(output.join("-"));
}else{
    console.log("Wrong Input");
}

// Count Divisors
let input = "5 20 9";
let myInput = input.split(" ");
let output = 0;
for (let i=parseInt(myInput[0])+1; i<=(myInput[1]-1); i++){
    if(i %myInput[2] == 0){
        output += parseInt(i);
    }
}
console.log(output);

// Factorial
let input = 8;
let output = 1;

input = (input >= 1 && input <= 20) ? input : false;

for (let i=input; i>0; i--){
    output *= i;
}
if(input){
    console.log(output);
}else{
    console.log("Wrong Input");
}

// Return of Investments
let input1 = 1000;
let input2 = 15;
let input3 = 5;
let output = 0;

input1 = (input1 >= 1000 && input1 <= 1000000000) ? input1 : false;//initialfund
input2 = (input2 >= 1 && input2 <= 20) ? input2/100 : false;//profitperyear
input3 = (input3 >= 1 && input3 <= 40) ? input3 : false;//yearofwithdraw
output = Math.floor(input1 * (1 + input2)**input3);

if(input1 && input2 && input3){
    console.log(`Rp ${output}`);
}else{
    console.log("Wrong Input");
}

// Podowae
let input = ("Yes").replace(/\s/g, "");
let lengthString = input.length;
let input2 = input.split("").reverse().join("");//read string from back
let output = "";

if(input.toUpperCase() === input2.toUpperCase()){
    console.log("YES");
}else{
    console.log("NO");
}

// The Factor
let input = 24;
let output = "";

if(Number(input) && input>0){
    for (let i=1; i<=input; i++){
        if(input % i == 0){
            output += i.toString() + " ";
        }
    }
    console.log(output);
}else{
    console.log("Wrong Input");
}

// Magic Prime
function isPrima(number){
    if(number == 1){
        return false;
    }

    for(let limit = 2;limit<number;limit++){
        if(number % limit == 0){
        return false;
        }
    }
return true;
}

function isMagicPrime(number){
    let strNumber = number.toString().split("")
    let maksLoop = strNumber.length

    for(let limit = 0;limit<maksLoop;limit++){
    
        if(!isPrima(parseInt(strNumber.join("")))){
            return false;
        }
    strNumber.splice(0,1)
    }
return true;
}

let input = 20;
let start = 100;
let count = 0;
for(let start = 100;count < input;start++){
    if(isMagicPrime(start)){
    console.log("#"+ (count+1) + " Number => " + start);
    count++;
    }
}

// Word Process
let input = ("Coding Id").toLowerCase().replace(/\s/g,'').split("");
let temp = "";
let result = "";
for(let limit = 0;limit<input.length;){
    temp = input[0]
    result += input[0]
    input.splice(0,1)
    for(let limit2 = 0;limit2 < input.length;limit2++){
        if(input[limit2] == temp){
            result += input[limit2]
            input.splice(limit2,1)
        }
    }
}
console.log(result);

// Sorting Vowel & Consonant
function procVowel(string){
    let ori_string = string.toLowerCase().replace(/\s/g,'');//samplecase
    let vowelRegex = /[aiueo]/ig;
    let result_vowelRegex = ori_string.match(vowelRegex);
    let temp = "";
    let result = "";
    console.log(result_vowelRegex)
    for(let limit = 0;limit<result_vowelRegex.length;){
        temp = result_vowelRegex[0]
        result += result_vowelRegex[0]
        result_vowelRegex.splice(0,1)
        for(let limit2 = 0;limit2 < result_vowelRegex.length;limit2++){
            if(result_vowelRegex[limit2] == temp){
                result += result_vowelRegex[limit2]
                result_vowelRegex.splice(limit2,1)
            }
        }
    }
    return result;
}
	
function procConsonant(string){
    let ori_string = string.toLowerCase().replace(/\s/g,'');//samplecase
    let consonantRegex = /[^0-9aiueo]/ig;
    let result_consonantRegex = ori_string.match(consonantRegex);
    let temp = "";
    let result = "";
    for(let limit = 0;limit<result_consonantRegex.length;){
        temp = result_consonantRegex[0]
        result += result_consonantRegex[0]
        result_consonantRegex.splice(0,1)
        for(let limit2 = 0;limit2 < result_consonantRegex.length;limit2++){
            if(result_consonantRegex[limit2] == temp){
                result += result_consonantRegex[limit2]
                result_consonantRegex.splice(limit2,1)
            }
        }
    }
    return result;
}
	
let input = "Sample Case";
// let input = "Next Case";
let charVowel = procVowel(input);
let charConsonant = procConsonant(input);
    
console.log("Vowel Characters : ");
console.log(charVowel);
console.log("Consonant Characters : ");
console.log(charConsonant);