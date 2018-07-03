/*
const obj = {nome: "Jonathan", idade: 32};
const arr = ["Jonathan", 32];

console.log(JSON.stringify(obj));
console.log(JSON.stringify(arr));

const json = '{"nome":"Jonathan", "Idade": 32}';

const jsonObject = JSON.parse(json);

console.log(jsonObject);

console.log(jsonObject.Idade);

//var obj2 = obj;

var obj2 = Object.assign({}, obj);

console.log(obj, obj2);
*/
var t = {
    nome: "r",
    idade: 25,
    endereco: {
        e: "rrrr"
    }
}

var { endereco: { e } } = t

console.log(e)

function rand({min, max = 1000}) {
    return min + max;
}

console.log(rand({min: 10}))