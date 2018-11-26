
class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `
        <div class="columns">
        <div class="column is-6">
            <div class="card events-card">
                <header class="card-header">
                    <p class="card-header-title">
                        CONTATO
                    </p>
                    
                </header>
                <div class="card-table">
                    <div class="content">
                        <table class="table is-fullwidth is-striped">
                            <tbody>
                                   <tr>                 
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td><input id="itemValue" class="input enter" type="text" disabled value="${item.nome}">
                                      <input id="itemTelefone" class="input enter" type="text" disabled value="${item.telefone}">
                                      <input id="itemCpf" class="input enter" type="text" disabled value="${item.cpf}">
                                      <input id="itemEndereco" class="input enter" type="text" disabled value="${item.endereco}">
                                    </td>
                                    <td><a class="button is-info editar">
                                      <span class="icon is-small">
                                          <i class="fas fa-edit"></i>
                                      </span>
                                  </a>
                                  <a style="margin-top:10px" class="button is-danger deletar">
                                    <span class="icon is-small">
                                        <i class="fas fa-times"></i>
                                    </span>
                                </a></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
        </div>
    
    </div>`

        const itemHTML = document.createRange().createContextualFragment(template)

        itemHTML.querySelector('.deletar').addEventListener('click', () => {
            lista.excluirIndex = item.idx
            componentList_v2(lista.todos)
        })

        const inputDesc = itemHTML.querySelector('#itemValue')
        const itemTelefone = itemHTML.querySelector('#itemTelefone')
        const itemCpf = itemHTML.querySelector('#itemCpf')
        const itemEndereco = itemHTML.querySelector('#itemEndereco')
        const inputs = itemHTML.querySelectorAll('.enter')

        itemHTML.querySelector('.editar').addEventListener('click', (e) => {
            inputDesc.removeAttribute('disabled')
            itemTelefone.removeAttribute('disabled')
            itemCpf.removeAttribute('disabled')
            itemEndereco.removeAttribute('disabled')
            inputDesc.focus()

            inputs.forEach(element => {
                element.addEventListener('keyup', (e) => {
                    if (e.key === "Enter") {
                        lista.editarIndex(item.idx, {
                            nome: inputDesc.value,
                            telefone: itemTelefone.value,
                            cpf: itemCpf.value,
                            endereco: itemEndereco.value
                        })
                        componentList_v2(lista.todos)
                        valueItem.value = ''
                        valueTelefone.value = ''
                        valueCpf.value = ''
                        valueEndereco.value = ''
                        valueItem.focus()
                    }
                })
            })
        })

        return itemHTML
    }
}
