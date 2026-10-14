////////////////////////////// Atividade 1 ////////////////////////////// 

const nome = "Enzo";
const idade = 16;
const cidade = "Londrina";
const esporte = " Volei"



const frase = `Meu nome é ${nome}, e tenho ${idade}, anos e moro em ${cidade} desde que eu nasci` ;
console.log(frase);

////////////////////////////// Atividade 2 ////////////////////////////// 

const IdadeEmDias = idade * 365;
const IdadeEmMeses = idade * 12;
console.log("Minha idade em dias é: " + IdadeEmDias);
console.log("Minha idade em meses é: " + IdadeEmMeses);

////////////////////////////// Atividade 3 ////////////////////////////// 

console.log("Olá, meu nome é " + nome, "e tenho " + idade, "anos e em dia é " + IdadeEmDias, " e moro em " + cidade, " desde quando eu nasci, e um dos meus esportes favoritos é " + esporte )

////////////////////////////// Atividade 4 ////////////////////////////// 


const precoUnit = 9;
const qtde = 12;
const subtotal = precoUnit * qtde;
const valorMinimoPraTerDesconto = 20;
const temDesconto= subtotal >= valorMinimoPraTerDesconto;

console.log(temDesconto)

const cidadeAlerta = "Londrina";
const cidadeDorme = "Londrina";

const freteGratis = temDesconto && (cidadeAlerta == cidadeDorme);

const resultado = `SubTotal: R$ ${subtotal}\n
Tem desconto: ${temDesconto}
Frete Gratis: ${freteGratis}`

console.log(resultado)

////////////////////////////// Atividade 5 ////////////////////////////// 

if (idade >= 18){
    console.log("Você é maior de idade");
} else if (idade <= 17 && idade >= 0){
    console.log("Você é menor de idade");
} else {
    console.log("idade inválida");
}

////////////////////////////// Explicação 6 ////////////////////////////// 

console.log("Escolha uma matéria: 1 - Quimica; \n2 - Geografia; \n3 - Português; \n4 - Biologia; \n Matéria indisponível");

const materia = "Quimica";

switch(materia){
    case "Quimica":
        console.log("Top");
        break;
    case "Geografia":
        console.log("Mediano");
        break;
    case "Português":
        console.log("Insuportável");
        break;
    case "Biologia":
        console.log("Interessante");
        break;
    default:
        console.log("Matéria indisponível");
}

////////////////////////////// Atividade 6 ////////////////////////////// 


const Idade = 20;

if (Idade >= 18 && Idade <= 60){
    console.log("Você é Adulto");
} else if (Idade <= 17 && Idade >= 12){
    console.log("Você é Adolescente");
} else if (Idade <= 11 && Idade >= 3){
    console.log ("Você é Criança");
} else if ( Idade <= 2 && Idade >= 0){
    console.log("Você é Bebê");
} else if (Idade >= 61 && Idade <= 1100){
    console.log("Você é Idoso");
} else {
    console.log("Idade inválida");
}

////////////////////////////// Atividade 7 ////////////////////////////// 

const pontos = 7000;
const anosDeCliente = 10;
if (pontos >= 1000 && anosDeCliente >= 1){
    console.log("Diamante")
} else if (pontos >= 500 && pontos <= 999 ){
    console.log("Ouro")
} else if (pontos >= 100 && pontos <= 499 ){
    console.log("Prata")
} else if (pontos >= 0 && pontos <= 99){
    console.log("Bronze")
}