/*var nome = "Diego Anselmo";
var idade = 31;
alert("Bem Vindo\n" + nome + "\nIdade  " + idade);*/

//arrays e dicionário

/*ar lista = ["maça", "pera", "larajna"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
alert(lista);*/

/*var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta.nome);
alert(fruta.cor);*/

/*var fruta = [
  { nome: "maça", cor: "vermelha" },
  { nome: "uva", cor: "vinho" },
];
console.log(fruta);
alert(fruta[1].nome);*/

//Condicionais, laços de repetição e date

/*var idade = prompt("Qual sua idade??");
if (idade >= 18) {
  alert("maior de idade");
} else {
  alert("Menor de idade");
}*/

//laços de repetição

/*var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}*/

/*var count;
for (count = 1; count <= 5; count++) {
  alert(count);
}*/

/*var d = new Date();
alert(d);
alert(d.getDay);
alert(d.getMonth);
alert(d.getHours);
alert(d.getMinutes);
alert(d.getHours);*/

/*var lista  = [nome: “rosa” , “cravo” , “tulipa”, “margarida”]
console.log(lista[2]);*/

//FUNÇÕES

//função 01
/*function soma(n1, n2) {
  return n1 + n2;
}*/

/* função 02
var validar = 0;
function validaIdade(idade) {
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

//função 03
var idade = prompt("Qual sua idade??");
validaIdade(idade);
console.log(validar);

/*function setReplace(frase, nome, nome_nome) {
  return frase.replace(nome, nome_nome);
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

//função 04
function clicou() {
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  // console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
  window.open("https://www.facebook.com/");
  //window.location.href = "https://www.facebook.com/";
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML =
  //  "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("pagina carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}
