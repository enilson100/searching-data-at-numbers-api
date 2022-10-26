class ApiNumbers {
    static fazerRequisicoes(){
        document.querySelector('#subDate').addEventListener('click', function(e){
            e.preventDefault()
             const valueDate = document.querySelector('#date').value
             const arrDate = valueDate.split('-')
             const numberValue = document.querySelector('#number').value
             const section = document.querySelector('#section')

             section.innerHTML = ''

             fetch(`http://numbersapi.com/${numberValue}/trivia?json`).then(response => {
                return response.json()
             }).then(number => {
                ApiNumbers.criarCards(number)
             })
            
             fetch(`http://numbersapi.com/${arrDate[0]}/year?json`).then(response => {
                return response.json()
             }).then(date => {
                ApiNumbers.criarCards(date)
             })

             fetch(`http://numbersapi.com/${arrDate[1]}/${arrDate[2]}/date?json`).then(response => {
                return response.json()
             }).then(date => {
                ApiNumbers.criarCards(date)
             })
        })
              
    }
    static criarCards(value){
        const section = document.querySelector('#section')
        const div = document.createElement('div')
        div.classList.add('div')
        const p = document.createElement('p')

        p.innerText = value.text

        div.appendChild(p)
        section.appendChild(div)
    }
}

ApiNumbers.fazerRequisicoes()