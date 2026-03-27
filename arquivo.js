


// buscando o botao no html que vai ser usado 
const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselecttop = document.querySelector(".currency-select-top")

//função para o botao .convert-button
function convertvalues() {
    //todos os elementos que vao funcionar ao clicar no botao 
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor real valor para converter
    const currencyvalue = document.querySelector(".currency-value") //valor pra convertido 


    //variavel para soma valor ao países 

    const dolar = 5.30
    const euro = 7.00
    const libra = 0.000059
    const real = 1


    //variavel traz resultado da soma criada  convertedola ou outro ...
    const convertdolar = inputcurrencyvalue / dolar
    const converteuro = inputcurrencyvalue / euro
    const convertlibra = inputcurrencyvalue / libra
    const convertreal = inputcurrencyvalue /real

    //SELCTE 1 TROCA OPÇÕES 
        currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue)
        console.log("troca brasil")
    






    //TROCA SELECT 2  VALOR NUMERO 
    if (currencyselect.value == "dolar") {
        currencyvalue.innerHTML = new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD"
        }).format(convertdolar)
    }


    //troca do 2 texto la no html = converteuro
    if (currencyselect.value == "euro") {
        currencyvalue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(converteuro)
    }
    if (currencyselect.value == "libra") {
        currencyvalue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(convertlibra)
    }

    //mostra no console  se os elementos estao funcionando
    /*console.log("currencyselect")
    console.log("change")
    console.log(currencyvalue + "texto input")
    console.log(currencyvaluetoconvert + " texto convertido")
    console.log(convertdolar + " resultado convertido dola")
    console.log(converteuro + " resultado convertido euro")
    console.log(inputcurrencyvalue + " valor digitado no input")
    console.log("click funcionou ")*/

}

// SELECT 2 TROCA NOME E BANDEIRA  
function changecurrency() {
    const currencyname = document.querySelector("#currency-name")
    const currencyimg = document.querySelector(".currency-img")


    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dólar"
        currencyimg.src = "./assets.jpeg/estados.png"
    }

    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets.jpeg/europe.png"
    }


    if (currencyselect.value == "libra") {
        currencyname.innerHTML = "Libra"
        currencyimg.src = "./assets.jpeg/reinounido.png"
    }
    convertvalues()
}


    currencyselect.addEventListener("change", changecurrency)
    convertbutton.addEventListener("click", convertvalues)








/*

MEU PROJETO NA AULA 


//IMAGEM DOS ICONES https://icon-icons.com/pt/
// MINHA FORMULA KLEBER 

//cliquei no selec1 = ok 
const select1 = document.querySelector("#select1")
select1.addEventListener("change", function() {
    console.log("cliquei no select1")
});

//cliquei no select2 = ok
const select2 = document.querySelector("#select2")
select2.addEventListener("change", function() {
    console.log("select2.value")
});

//input
 //buscando o vlor que é digitado no input
const input1 = document.querySelector("#input1");
input1.addEventListener("keypress", function() {
    console.log("input1 foi digitado ")
})      

//botao evento 
const rselect1 = document.querySelector("#rselect1"); 
const button = document.querySelector("#button");
button.addEventListener("click", function(){



    //SOMA 
    //trazendo a variaveis ja criada no inicio 

    const select1= document.querySelector("#select1")//de
    const select2= document.querySelector("#select2")//para
    const input1= document.querySelector("#input1")//input valor

    //SOMA 
   

    //transforma todos os valores em real 
    let valoremreal= input1.value * select1.value;
    //converte para a moeda escolhida 
    let totalvaloremreal = valoremreal/select2.value;

    //essa variavel transformar o rselec1 em decimal real
     let select01 = input1.value*100/100;


     
    //SE ADICIONAR MAIS PAISES, TEM QUE ADICIONAR AQUI E NO HTML
    //TROCA O TEXT NO HTML O SIMBOLO $
    //VALOR DIGITADO NO INPUT1 e IMAGEM BANDEIRA 

//SELECT1 INPUT1



    //TROCA O TEXT NO HTML PARA Select01
    const rselect1 = document.querySelector("#rselect1");// #rselet1  é pra busca o botão 
    rselect1.textContent= "" + select01.toFixed(2) ;
   
    //SIMBOLO $
    if (select1.value==  "1"){
     rselect1.textContent= 'R$ ' + select01.toFixed(2) ;}
    else if (select1.value == "7") {
     rselect1.textContent= '€ ' + select01.toFixed(2) ;}
    else if ( select1.value== "5.24") {
     rselect1.textContent= '$ ' + select01.toFixed(2) ;}

    //BANDEIRA1  
    // SE ADICIONAR MAIS PAISES, TEM QUE ADICIONAR AQUI E NO HTML
    const img = document.querySelector(".bandeira1");
        if (select1.value ==  "1"){
        img.src = "https://images.icon-icons.com/97/PNG/256/brazil_flags_flag_16979.png" ;  
    }
    else if (select1.value  == "5.24") {
        img.src = "https://images.icon-icons.com/97/PNG/96/united_states_flags_flag_17080.png";    
    } 
    else if (select1.value== "7") {
        img.src = "https://images.icon-icons.com/97/PNG/96/europe_flags_flag_16997.png";    
    }






//SELECT2

    //TROCA O TEXT NO HTML E MOSTRA O TOTAL DA SOMA 
    const resultado = document.querySelector("#rselect2"); //PARA MOSTRA O VALOR TOTAL DA SOMA 
    resultado.textContent = "" + totalvaloremreal.toFixed(2);




    //SIMBOLO adicionar o simbolo  $
    if (select2.value ==  "1"){
    resultado.textContent = 'R$ ' + totalvaloremreal.toFixed(2)}
    if (select2.value  == "7") {
    resultado.textContent = '€ ' + totalvaloremreal.toFixed(2)}
    if (select2.value== "5.24") {
    resultado.textContent = '$ ' + totalvaloremreal.toFixed(2)}
   








    //BANDEIRA2  TROCA A BANDEIRA 
    // SE ADICIONAR MAIS PAISES, TEM QUE ADICIONAR AQUI E NO HTML
 const img2 = document.querySelector(".bandeira2");
    if (select2.value ==  "1"){
        img2.src = "https://images.icon-icons.com/97/PNG/256/brazil_flags_flag_16979.png";
    } 
    else if (select2.value  == "5.24") {
        img2.src = "https://images.icon-icons.com/97/PNG/96/united_states_flags_flag_17080.png";
    } 
    else if (select2.value== "7") {
        img2.src = "https://images.icon-icons.com/97/PNG/96/europe_flags_flag_16997.png";
    }

   
    //mostrano consoe o resultado.textcontent
    console.log(resultado.textContent)
    
    
    



});
*/


