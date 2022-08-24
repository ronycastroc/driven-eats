let prato;  
let bebida;
let sobremesa;
let nomePrato;
let nomeBebida;
let nomeSobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;

function selecionarPrato(elemento) {
    const click = document.querySelector('.borda');   
    prato = elemento;
    nomePrato = prato.querySelector('.nomeprato').innerText;
    valorPrato = prato.querySelector('.valorprato').innerHTML;    

    if (click !== null) {
        click.classList.remove('borda');        
    }

    elemento.classList.add('borda');    
        
    liberar();
}
 

function selecionarBebida(elemento) {
    const click = document.querySelector('.bebidaclick .borda');    
    bebida = elemento;
    nomeBebida = bebida.querySelector('.nomebeb').innerText;
    valorBebida = bebida.querySelector('.valorbeb').innerHTML;
    
    if (click !== null) {
        click.classList.remove('borda');
    }

    elemento.classList.add('borda');
    
    liberar();
}


function selecionarSobremesa(elemento) {
    const click = document.querySelector('.pudimclick .borda');
    sobremesa = elemento;
    nomeSobremesa = sobremesa.querySelector('.nomepud').innerText;
    valorSobremesa = sobremesa.querySelector('.valorpud').innerHTML;
    
    if (click !== null) {
        click.classList.remove('borda');
    }
    elemento.classList.add('borda');

    liberar();
}

function liberar() {
    
    if (prato && bebida && sobremesa) {
        const p = document.querySelector('.botaobarra p');
        const botao = document.querySelector('.botaobarra');
        botao.classList.add('selecionado');
        p.innerHTML = 'Fechar Pedido';
    }
}

function fecharPedido() {
    const confirmar = document.querySelector('.confirmarcaixa') 
    confirmar.classList.remove('escondido');
    const opacity = document.querySelector('.box')
    opacity.classList.add('opacity')
    let pratoValor = Number(valorPrato.substr(3)).toFixed(2);
    let bebidaValor = Number(valorBebida.substr(3)).toFixed(2);
    let sobremesaValor = Number(valorSobremesa.substr(3)).toFixed(2);
    let total = Number(pratoValor) + Number(bebidaValor) + Number(sobremesaValor);   

    const spanComida = document.querySelector('.food > span:nth-child(1)');
    const spanBebida = document.querySelector('.drink > span:nth-child(1)');
    const spanSobremesa = document.querySelector('.candy > span:nth-child(1)');
    const spanValCom = document.querySelector('.food > span:nth-child(2)');
    const spanValBeb = document.querySelector('.drink > span:nth-child(2)');
    const spanValSob = document.querySelector('.candy > span:nth-child(2)');
    const spanTotal = document.querySelector('.all > span:nth-child(2)');
    const spanPedido = document.querySelector('.tudocerto > span');

    const nome = prompt('Informe o seu nome.');
    const endereco = prompt('Informe seu endereço.');

    const texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${nomePrato}
        - Bebida: ${nomeBebida}
        - Sobremesa: ${nomeSobremesa}
        Total: R$ ${total.toFixed(2)}
        
        - Nome: ${nome}
        - Endereço: ${endereco}`);    

    spanComida.innerHTML = `${nomePrato}`;
    spanBebida.innerHTML = `${nomeBebida}`;
    spanSobremesa.innerHTML = `${nomeSobremesa}` ;
    spanValCom.innerHTML = `R$${pratoValor}`;
    spanValBeb.innerHTML = `R$${bebidaValor}`;
    spanValSob.innerHTML = `R$${sobremesaValor}`;
    spanTotal.innerHTML = `R$${total.toFixed(2)}`;

    spanPedido.innerHTML = `<a href="https://wa.me/5521968249442?text=${texto}">Tudo certo, pode pedir!</a>`;
}

function cancelar() {
    const cancelar = document.querySelector('.confirmarcaixa');
    const opacity = document.querySelector('.box');
    cancelar.classList.add('escondido');
    opacity.classList.remove('opacity');    
}