'use strict'; //Ativa o modo restrito
// Código para consumo de API da ViaCEP
// https://viacep.com.br/


// Limpar consulta do form já realizada
const limparFormulario = () =>{
 
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
 
 
}
 
// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

// Função para consumo de API ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty()){
            alert('CEP não encontrado');
        
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP Incorreto');
    }
}

// Executa a ação de preenchimento do formulário ao deixar o campo do CEP
document.getElementById('cep').addEventListener('focusout' , pesquisarCep);