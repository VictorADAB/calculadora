var display;

function clickButton(valor) {
    display = document.getElementsByClassName("display")[0];
    display.classList.remove("negativo");
    display.classList.remove("positivo");
    display.classList.remove("neutro");
    if (isNaN(valor)) {
        switch (valor) {
            case "C": 
                display.innerHTML = "";
                break;
            case "=":
                calculaTudo();
                break;
            case "<":
                display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1);
                break;
            case "/":
                display.innerHTML += valor;
                break;
            case "X":
                display.innerHTML += "*";
                break;
            case "-":
                display.innerHTML += valor;
                break;
            case "+":
                display.innerHTML += valor;
                break;
            case ".":
                display.innerHTML += valor;
                break;
        }
    }

    else {
        display.innerHTML += valor;

    }
}

function calculaTudo() {
    var novoValor;
    display = document.getElementsByClassName("display")[0];
    novoValor = eval(display.innerHTML);
    if(novoValor == undefined){
        novoValor = "";
    }

    display.innerHTML = novoValor;

    if(novoValor > 0){
        display.classList.add("positivo");
        display.classList.remove("negativo");
        display.classList.remove("neutro");
    } 
    else if(novoValor < 0){
        display.classList.add("negativo");
        display.classList.remove("positivo");
        display.classList.remove("neutro");
    }else{
        display.classList.add("neutro");
        display.classList.remove("negativo");
        display.classList.remove("neutro");
    }

}

