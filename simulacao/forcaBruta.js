import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
        };
        
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    };
        
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!");
            return true;
        } else {
            //console.log("Usuário ou senha inválidos!");
            return false;
        }
    };
};

const usuario = new Usuario('joao manoel', '1234');

//caso de sucesso
for (let senhaTeste = 0; senhaTeste < 1000; senhaTeste++) {
    
    if (usuario.autentica("joao manoel", senhaTeste.toString())) {
        
        console.log(`A Senha do usuário é: ${senhaTeste}`);
    }     
};








