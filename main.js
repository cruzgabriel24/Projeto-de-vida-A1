const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

function calculaTempo(dataAlvo) {
    const agora = new Date();
    const diferenca = dataAlvo - agora;
    
    if (diferenca <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    
    const segundosTotal = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotal / 86400);
    const horas = Math.floor((segundosTotal % 86400) / 3600);
    const minutos = Math.floor((segundosTotal % 3600) / 60);
    const segundos = segundosTotal % 60;
    
    return { dias, horas, minutos, segundos };
}

const objetivo1 = new Date(2026, 4, 30, 23, 59, 59);
const objetivo2 = new Date(2026, 5, 15, 23, 59, 59);
const objetivo3 = new Date(2026, 6, 1, 23, 59, 59);
const objetivo4 = new Date(2026, 7, 20, 23, 59, 59);

function atualizarTodosContadores() {
    const tempo1 = calculaTempo(objetivo1);
    const tempo2 = calculaTempo(objetivo2);
    const tempo3 = calculaTempo(objetivo3);
    const tempo4 = calculaTempo(objetivo4);
    
    document.getElementById("dias0").textContent = tempo1.dias;
    document.getElementById("horas0").textContent = tempo1.horas;
    document.getElementById("min0").textContent = tempo1.minutos;
    document.getElementById("seg0").textContent = tempo1.segundos;
    
    document.getElementById("dias1").textContent = tempo2.dias;
    document.getElementById("horas1").textContent = tempo2.horas;
    document.getElementById("min1").textContent = tempo2.minutos;
    document.getElementById("seg1").textContent = tempo2.segundos;
    
    document.getElementById("dias2").textContent = tempo3.dias;
    document.getElementById("horas2").textContent = tempo3.horas;
    document.getElementById("min2").textContent = tempo3.minutos;
    document.getElementById("seg2").textContent = tempo3.segundos;
    
    document.getElementById("dias3").textContent = tempo4.dias;
    document.getElementById("horas3").textContent = tempo4.horas;
    document.getElementById("min3").textContent = tempo4.minutos;
    document.getElementById("seg3").textContent = tempo4.segundos;
}

atualizarTodosContadores();
setInterval(atualizarTodosContadores, 1000);

const textoOriginal = "Meus objetivos do ano";
const typedTextElement = document.querySelector(".typed-text");
let index = 0;

function typeWriter() {
    if (index < textoOriginal.length) {
        typedTextElement.textContent += textoOriginal.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();