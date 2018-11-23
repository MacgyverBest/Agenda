
class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `
           <div class="card" style="width: 800px; height: 220px; margin-top: 15px">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content" >
             <p class="title "><input style="width: 600px; height: 30px" id="itemValue" class="input enter" size="15" type="text" disabled value="${item.nome}"></p>
              <p class="subtitle "><input style="width: 600px; height: 30px" id="itemTelefone" class="input enter" type="text" disabled value="${item.telefone}"></p>
               <p class="subtitle "><input style="width: 600px; height: 30px" id="itemCpf" class="input enter" type="text" disabled value="${item.cpf}"></p>
               <p class="subtitle "><input style="width: 600px; height: 30px" id="itemEndereco" class="input enter" type="text" disabled value="${item.endereco}"></p>
                </div>
              
              
             <p class="control" style="margin-left:10px"  >
                    <a class="button is-info editar">
                        <span class="icon is-small">
                            <i class="fas fa-edit"></i>
                        </span>
                    </a>
                </p>
                <p class="control" style="margin-left:10px">
                    <a class="button is-danger deletar">
                        <span class="icon is-small">
                            <i class="fas fa-times"></i>
                        </span>
                    </a>
                </p>
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
