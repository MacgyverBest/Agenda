const valueItem = document.getElementById('itemValue')
const valueTelefone = document.getElementById('itemTelefone')
const valueCpf = document.getElementById('itemCpf')
const valueEndereco = document.getElementById('itemEndereco')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = '' // apago tudo que existe dentro da div
    items.forEach((i, idx) => {
        let item = {
            nome: i.nome,
            telefone: i.telefone,
            cpf: i.cpf,
            endereco: i.endereco,
            idx: idx // poderia ser enxugado somente para -> idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

valueEndereco.addEventListener('keyup', (e) => {
   if (e.keyCode === 13) {
        lista.novoItem = {
            nome: valueItem.value,
            telefone: valueTelefone.value,
            cpf: valueCpf.value,
            endereco: valueEndereco.value,
        }
        componentList_v2(lista.todos)
        valueItem.value = ''
        valueTelefone.value = ''
        valueCpf.value =''
        valueEndereco.value = ''
        valueItem.focus()
    }
})

window.onload = () => { 
    console.log('página carregada com sucesso')
    componentList_v2(lista.todos)
}
