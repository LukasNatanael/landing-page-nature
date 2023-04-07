// Selecionando itens
let logo = document.querySelector('#logo')
let body = document.querySelector('body')
let header = document.querySelector('header')
let input = document.querySelectorAll('.input-personalizado')
let msg = document.querySelector('#msg')
let btnLogin = document.querySelector('#btn-login')
let borda = document.querySelector('.borda')

logo.addEventListener('click', function() {
    if (body.classList.value == 'light') {
        body.classList.remove('light')
        header.classList.remove('light-header')

        body.classList.add('dark')
        header.classList.add('dark-header')
        msg.style.border = '1px solid #F1FAEE'
        msg.style.background = '#2323237e'
        msg.style.color = '#F1FAEE'
        borda.style.borderColor = '#F1FAEE'
        
        btnLogin.style.color = '#F1FAEE'

        input.forEach(function (item, indice) {
            input[indice].style.borderBottom = '1px solid #F1FAEE'
            input[indice].style.color = '#F1FAEE'
        })
        
    }
    else {
        body.classList.remove('dark')
        header.classList.remove('dark-header')
        
        body.classList.add('light')
        header.classList.add('light-header')
        msg.style.border = '1px solid #344E41'
        msg.style.background = '#dad7cd7e'
        msg.style.color = '#344E41'
        borda.style.borderColor = '#344E41'
        
        btnLogin.style.color = '#344E41'

        input.forEach(function (item, indice) {
            input[indice].style.borderBottom = '1px solid #344E41'
            input[indice].style.color = '#344E41'
        })
    }
})