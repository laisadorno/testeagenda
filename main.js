const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
e.preventDefault();

    adicionaLinha();


    
function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
     } else {
        nome.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha+= '</tr>';
        
        linhas += linha;
     }

     inputNomeContato.value = '';
     inputNumeroContato.value = '';
}



const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

inputNomeContato.value = '';
inputNumeroContato.value = '';
})