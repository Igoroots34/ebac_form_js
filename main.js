const form = document.getElementById('form-divida')

const campoA = document.getElementById('campo-A')
const campoB = document.getElementById('campo-B')

function validaForm() {
    return (campoA, campoB)
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const mensagemErro = `&#10006; Sua dívida é maior que o valor disponível!`
    const menssagemSucesso = `&#10004; Você tem <i>R$ <b>${campoB.value}</b></i> disponível e pode pagar sua dívida de <i>R$ <b>${campoA.value}</b></i>`

    if (parseInt(campoA.value) < campoB.value) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = menssagemSucesso
        containerMensagemSucesso.style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'

        campoA.value = ''
        campoB.value = ''
    } else { 
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
        document.querySelector('.success-message').style.display = 'none'
        
    }
})