const calcular = () => {
    
    let tabuada = Number(document.getElementById('number').value)
    let textarea = document.querySelector('#tabuada')
    textarea.innerHTML = ''
    
    for(let i = 0; i <= 10; i++){
        textarea.innerHTML += `${tabuada} x ${i} = ${tabuada * i}\n`
    }

    textarea.innerHTML += 'END'
}

const btn = document.querySelector('#calcular')
btn.addEventListener('click', calcular)