const end = document.querySelector("#endereco")
const bairro = document.querySelector("#bairro")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const cep = document.querySelector("#cep")

async function pesquisarCep(){

    if(validarCep(cep.value)){
        const url = `https://viacep.com.br/ws/${cep.value}/json/`
        const response = await fetch(url)
        const data = await response.json()

        if (data.hasOwnProperty("erro")){
            endereco.value = "Endereço não encontrado!"
        }
        else {
            preencherFormulario(data) 
        }
        
    }
    else {
        end.value = "CEP inválido!"
    }
}

function preencherFormulario(endereco){
    end.value = endereco.logradouro
    bairro.value = endereco.bairro
    cidade.value = endereco.localidade
    estado.value = endereco.uf
}

function validarCep(cep){
    if (cep.length == 8 && /^[0-9]+$/.test(cep)){
        return true
    }

    else {
       return false
    }
}   


cep.addEventListener("blur", pesquisarCep)
