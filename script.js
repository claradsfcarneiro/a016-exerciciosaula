/*EXERCÍCIO 1- laços+laços e laços+condições
Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays.
Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados.
Caso seja diferente, imprima que é necessário alterar o número de itens do array. 

Agora, devemos imprimir cada um dos jogos, no seguinte formato:
- Sorteio 1: num1, num2, num3, num4, num5, num6
- Sorteio 2: num1, num2, num3, num4, num5, num6
- Sorteio 3: num1, num2, num3, num4, num5, num6
- Sorteio 4: num1, num2, num3, num4, num5, num6
Utilize dois laços para isso. 
*/


const  megaSena = [
  [20,34,27,53,29,78],
  [56,92,47,64,32,07],
  [79,30,72,38,54,44],
  [09,23,03,37,91,87]
]

/*
if (4 === megaSena.length) {
  for (let i = 0; i < megaSena.length; i++) {
    let sorteio = `sorteio ${i+1}: `;
    for(let j = 0; j < megaSena[i].length; j++){
      sorteio += megaSena[i][j] + ', ';
    }
    sorteio = sorteio.slice(0, -2);
    console.log(sorteio);
  }
} else {
  console.log("É necessário alterar o número de itens do array");
}
/*


/*EXERCÍCIO 2- for...in 
Altere o laço externo do programa anterior para que ele seja um for... in.
*/

/*
if (4 === megaSena.length) {
  for (let i in megaSena) {
    let sorteio = `sorteio ${Number(i)+1}: `;
    for(let j = 0; j < megaSena[i].length; j++){
      sorteio += megaSena[i][j] + ', ';
    }
    sorteio = sorteio.slice(0, -2);
    console.log(sorteio);
  }
} else {
  console.log("É necessário alterar o número de itens do array");
}
*/

/* EXERCÍCIO 3 - for... of
Altere o laço interno do programa anterior para que ele seja um for... of
*/

/*
if (4 === megaSena.length) {
  for (let i in megaSena) {
    let sorteio = `sorteio ${Number(i)+1}: `;
    for(let j of megaSena[i]){
      sorteio += j + ', ';
    }
    sorteio = sorteio.slice(0, -2);
    console.log(sorteio);
  }
} else {
  console.log("É necessário alterar o número de itens do array");
}
*/



/*EXERCÍCIO 4
Use o array de filmes que está no template.
a. Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String.
b. Crie um laço for dentro do primeiro, para concatenar o elenco numa String.
A saída deve se parecer com:
"O Homem que Copiava, de 2003, dirigido por Jorge Furtado"
"Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso"
*/

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]


/*
for (let i = 0; i < filmes.length; i++) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
  let elenco = `Tem no elenco: `;
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    elenco += filmes[i].elenco[j] + ', ';
  }
  elenco = elenco.slice(0, -2);
  console.log(elenco);
}
*/


/*EXERCÍCIO 5
Altere o laço externo do programa anterior para que ele seja um for... in
*/

/*
for (let i in filmes) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
  let elenco = `Tem no elenco: `;
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    elenco += filmes[i].elenco[j] + ', ';
  }
  elenco = elenco.slice(0, -2);
  console.log(elenco);
}
*/


/*EXERCÍCIO 6
Altere o laço interno do programa anterior para que ele seja um for... of 
*/

/*
for (let i in filmes) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
  let elenco = `Tem no elenco: `;
  for (let j of filmes[i].elenco) {
    elenco += j + ', ';
  }
  elenco = elenco.slice(0, -2);
  console.log(elenco);
}
*/