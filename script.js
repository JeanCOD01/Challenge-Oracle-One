
function grow(){
    textArea.parentNode.style.minHeight = textArea.parentNode.clientHeight + "px";
    textArea.style.height = "194px"; 
    textArea.style.height = (textArea.scrollHeight)+"px";
    textArea.parentNode.style.minHeight = 0;
}

function encode(){
    if (emptyField()) return
    crrText = translate(1, textArea.value.toLocaleLowerCase())
    changeClass("full")
    output.textContent = crrText
}

function decode(){
    if (emptyField()) return
    crrText = translate(0, textArea.value.toLocaleLowerCase())
    changeClass("full")
    output.textContent = crrText
}

function emptyField(){
    if (textArea.value == ""){
        changeClass("empty")
        return true
    }
}

function translate(act, text){
    if (act == 1) {
        for (let key in keys){
            text = text.replaceAll(key, keys[key])
        }
    } else if (act == 0) {
        for (let key in keys){
            text = text.replaceAll(keys[key], key)
        }   
    }
    return text
}

function changeClass(act){
    if (act == "full"){
        output.parentElement.classList.remove("empty")
        output.parentElement.classList.add("full")
    } else if (act == "empty") {
        output.parentElement.classList.remove("full")
        output.parentElement.classList.add("empty")
        output.innerHTML = messageModel
    }
}

function copy(){
    let copyText = output.textContent
    let tempInput = document.createElement("input")
    tempInput.type = "text"
    tempInput.value = copyText
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("Copy")
    document.body.removeChild(tempInput)

    changeText()
}

function changeText(){
    btnCopy.classList.add("trans")
    setTimeout(function(){
        btnCopy.disabled = true
        btnCopy.textContent = "Texto copiado com sucesso!"
        setTimeout(function(){
            btnCopy.classList.remove("trans")
        }, 1000)
    }, 500)
    setTimeout(() => {
        btnCopy.classList.add("trans")
    }, 2000);
    setTimeout(function(){   
        btnCopy.textContent = "Copiar"
        setTimeout(function(){
            btnCopy.classList.remove("trans")
        }, 500)
        btnCopy.disabled = false
    }, 2500)
}

let textArea = document.querySelector("textarea")
textArea.oninput = grow;
let crrText = ""
let keys = {
    e: "!@#$%",
    i: "¨*&¨%",
    a: "¨!",
    o: "&#$",
    u: "$%¨$",
    j: "#$¨¨%",
    n: "*&¨%$"
}
let output = document.querySelector('.text')
let messageModel = '<div class="message"><img src="./imgs/morpheus.png"><p>Nenhuma mensagem encontrada</p><p>Digite um texto que você deseja criptografar ou descriptografar.</p></div>'

let btnEncode = document.querySelector(".encode")
btnEncode.onclick = encode;
let btnDecode = document.querySelector(".decode")
btnDecode.onclick = decode
let btnCopy = document.querySelector(".copy")
btnCopy.onclick = copy;


// agora estou chamando os botao red para interação do button
// Selecione o botão pelo seu ID
var button = document.getElementById ("buttonred2");
// Adicione um evento de clique ao botão
    button.addEventListener("click", function() {
// Selecione o elemento pelo seu ID
    var div = document.getElementById("body2");
    var img = document.getElementById("imgcaixa");
//Altere a imagem do html
    img.src = "./imgs/iconematrix.png";
// Altere o estilo do elemento
    div.style.color = "#00d31c";
    div.style.setProperty("background-image", "url('./imgs/matrixred.gif')", "important");
 
  });

//Agora estou chamando os botao blue para interação do button
// Selecione o botão pelo seu ID
     var button2 = document.getElementById("buttonblue2");
// Adicione um evento de clique ao botão
    button2.addEventListener("click", function() {
// Selecione o elemento pelo seu ID
var div = document.getElementById("body2");
var img = document.getElementById("imgcaixa");
//Altere a imagem do html
    img.src = "./imgs/matrixicone.png";
// Altere o estilo do elemento
    div.style.color = "black"
    div.style.setProperty("background-image", "url('./imgs/')", "important");
 
  });



 