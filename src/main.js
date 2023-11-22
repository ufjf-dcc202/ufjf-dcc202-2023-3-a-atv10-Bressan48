import { getMaria, getJoao, deJoaoParaMaria, setMaria, setJoao } from "./joaoEMaria.js";

setMaria(4);
setJoao(2);

console.log("MAIN");
let maria = getMaria();
let joao = getJoao();
console.log(maria, joao);

deJoaoParaMaria();

maria = getMaria();
joao = getJoao();
console.log(maria, joao);