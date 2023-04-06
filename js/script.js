// Selecionando itens
let logo = document.querySelector('#logo')
let body = document.querySelector('body')
let header = document.querySelector('header')
let input = document.querySelectorAll('.input-personalizado')
let msg = document.querySelector('#msg')
let linha = document.querySelector('hr')

logo.addEventListener('click', function() {
    if (body.classList.value == 'light') {
        body.classList.remove('light')
        header.classList.remove('light-header')

        body.classList.add('dark')
        header.classList.add('dark-header')
        msg.style.border = '1px solid #F1FAEE'

        input[0].style.borderBottom = '1px solid #F1FAEE'
        input[0].style.color = '#F1FAEE'
        input[1].style.borderBottom = '1px solid #F1FAEE'
        input[1].style.color = '#F1FAEE'
        input[2].style.borderBottom = '1px solid #F1FAEE'
        input[1].style.color = '#F1FAEE'

        linha.style.color = '#F1FAEE'
    }
    else {
        body.classList.remove('dark')
        header.classList.remove('dark-header')
        
        body.classList.add('light')
        header.classList.add('light-header')
        msg.style.border = '1px solid #344E41'
        
        input[0].style.borderBottom = '1px solid #344E41'
        input[0].style.color = '#344E41'
        input[1].style.borderBottom = '1px solid #344E41'
        input[1].style.color = '#344E41'
        input[2].style.borderBottom = '1px solid #344E41'
        input[2].style.color = '#344E41'

        linha.style.color = '#344E41'

    }
})