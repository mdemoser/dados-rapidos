//Copiar o valor do campo correspondente
document.querySelectorAll('.btn-copiar').forEach(function(botao){
    botao.addEventListener('click', function(){
        const id = botao.getAttribute('data-alvo');
        const valor = document.getElementById(id).value;


        navigator.clipboard.writeText(valor)
        .then(function (){
            const textoOriginal = botao.textContent;
            botao.textContent = 'Copiado!';
            setTimeout(function (){
                botao.textContent = textoOriginal;
            }, 1000);

        })
        .catch(function (erro) {
            alert('Não foi possível copiar: ' + erro);
        });
    });
});


//Restar todos os campos
document.getElementById('btn-limpar').addEventListener('click', function () {

    if(!confirm('Tem certeza de que quer apagar os dados?')){
        return;
    }

    document.querySelectorAll('input[type="text"]').forEach(function (input){
        input.value = '';
    });
});