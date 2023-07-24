// Capturar o evento de submit do formulario e capturar dados 

const form = document.querySelector('#formulario'); // variavel para poder parar o envio do form

form.addEventListener('submit', function(event) {
    event.preventDefault(); //para cancelar o envio do formulario para outra pagina 
    const inputPeso = event.target.querySelector('#peso'); // capturar as informaçoes 
    const inputAltura = event.target.querySelector('#altura'); //capturar as informaçoes 
    const inputNome = event.target.querySelector('#nome');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); // ultilizando a tag number para nao voltar como string
    const nome = (inputNome.value);

    if (!nome) {
        setResultado('Nome inválido', false);
        return;
    } 
    
    if (!peso) {
        setResultado('Peso inválido', false);
        return; //fazer a validação com if 
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `${nome} Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    console.log(imc, nivelImc);
    
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // a cada array é contado de 0 a 5 separado cada um por , 
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// criar o paragrafo 

function criaP () {
    const p = document.createElement('p');
    return p;
}

//mostrar o resultado no html 
function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}


