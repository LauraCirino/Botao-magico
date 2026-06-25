const botaoMagico = document.getElementById("botao-magico");

let pontuacao = 0;

function corAleatoria(){
    const letras = "123456789ABCDEF";
    let cor = "#"
    for(let i = 0; i < 6; i++){
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

botaoMagico.addEventListener("click", function(){
    pontuacao++;
    botaoMagico.style.backgroundColor = corAleatoria();
    botaoMagico.textContent = `Pontos ${pontuacao}`
})