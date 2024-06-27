import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64);

    return `${sal}:${senhaHasheada}`;

};

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    };

    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
            
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashesCorrespondem) {
                console.log("Usuário autenticado com sucesso.");
                return true;
            }
        }
        
        console.log("Usuario ou senha incorretos.");
        return false;
    };
};

const novoUsuarioCadastrado = new Usuario('Glaudia Almeida', 'senhaSecreta');

console.log(novoUsuarioCadastrado);

//Teste de Sucesso
novoUsuarioCadastrado.autentica('Glaudia Almeida', 'senhaSecreta');

//Teste de Falha
novoUsuarioCadastrado.autentica('Glaudia Almeida', 'senhaSecreta2');

