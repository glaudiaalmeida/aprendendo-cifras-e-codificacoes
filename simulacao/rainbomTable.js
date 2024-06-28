import { createHash } from "crypto";

function criaHash(senha, estrategia) {
    return createHash(estrategia).update(senha).digest('hex');
};

const senhasComuns = ["senha", "123456", "senha1234", "admin",
     "blink182", "meuaniversario", "senha123456", "brasil", "102030"];

const rainbowTable = senhasComuns.map( senha => {
    return [senha, criaHash(senha, "MD5")];
})

console.log(rainbowTable);


const hashesVazadas = [""];

hashesVazadas.map(hashVazada => {   
    rainbowTable.map(parGerado => {
        if ( hashVazada === parGerado[1]) {
            console.log(`A senha encontrada é: ${hashVazada[0]} equivale à ${parGerado[1]}`);
        };
    });
});