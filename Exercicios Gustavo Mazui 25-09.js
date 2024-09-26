/////////////////Exercícios de interpretação de código 1 

/*function minhaFuncao(variavel) {
return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

//a) Será impresso no console: 10 e 50
//b) Não aconteceria nada no console, pois não pedimos para ser impresso, porém a função será executada normalmente.


/////////////////Exercícios de interpretação de código 2 

/*let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) 

a) A função revisa se contém ou não a palavra "cenoura" no texto do usuário.
b) aparecerá "true" em cada texto que conter "cenoura", e "false" caso não */  



/////////////////Exercícios de escrita de código 1, a)

/* function minhaMensagem() {
    console.log("Eu sou Gustavo, tenho 17 anos, moro em São Leopoldo e sou estudante.");
}

minhaMensagem(); */ 



/////////////////Exercícios de escrita de código 1, b)

/* let nome = "Gustavo"
let idade = 17
let cidade = "São Leopoldo"
let profissao = "Estudante"

function meusDados(nome, idade, cidade, profissao) {
 let texto = `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`
 texto.push 
 return texto 
}
console.log(meusDados(nome, idade, cidade, profissao)) */






/////////////////Exercícios de escrita de código 2 a)


/* function soma(x, y) {
    let soma = x + y
    return soma
}
console.log(soma(20, 45))

/////////////////Exercícios de escrita de código 2 b)

function maior(a, b) {
let resultado= a > b
return resultado
}
console.log(maior(45, 20))

/////////////////Exercícios de escrita de código 2 c)
function par(num1) {
let resultado = num1 % 2 === 0
return resultado
}
console.log(par(2))

/////////////////Exercícios de escrita de código 2 d)

 function exibirMensagem(mensagem) {
console.log("Mensagem Tamanho: ", mensagem.length); 
console.log("Maiusculo: ", mensagem.toUpperCase());
  } 

  exibirMensagem("Oepa");  */ 



  /////////////////Exercícios de escrita de código 3

  /*/ function soma (primeiroNumero, segundoNumero) {
    const soma = primeiroNumero + segundoNumero
 
    return primeiroNumero + segundoNumero
   }
 
   function Diferença (primeiroNumero, segundoNumero) {
    const Diferença = primeiroNumero % segundoNumero
    return primeiroNumero % segundoNumero
   }
 
 
 
   function Multiplicação (primeiroNumero, segundoNumero) {
     const Multiplicação = primeiroNumero * segundoNumero
     return primeiroNumero * segundoNumero
   }
 
 
 
 
   function Divisão (primeiroNumero, segundoNumero) {
     const Multiplicação = primeiroNumero / segundoNumero
     return primeiroNumero / segundoNumero
   }
 
   let primeiroNumero = Number(prompt("Digite um número"));
   let segundoNumero = Number(prompt("Digite outro número"));
    
   const resultadoSoma = soma (primeiroNumero, segundoNumero)
   const resultadoDiferenca = Diferença (primeiroNumero, segundoNumero)
   const resultadoMulti = Multiplicação (primeiroNumero, segundoNumero) 
   const resultadoDivisao = Divisão (primeiroNumero, segundoNumero)
 
   console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`);
   console.log(`Soma: ${resultadoSoma}`)
   console.log(`Diferença: ${resultadoDiferenca}`)
   console.log(`Multiplicação: ${resultadoMulti}`)
   console.log(`Divisão: ${resultadoDivisao}`) */ 