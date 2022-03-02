const submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', e => getSearchResults(e))

function getSearchResults(e) {
  e.preventDefault()
  fetch('http://localhost:3000/results')
    .then(resp => resp.text())
    .then(searchResult => document.getElementById('searchText').innerHTML = searchResult)
    .then(window.open('http://localhost:3000/results'))
}



const randomButton = document.querySelector('#randomButton')

randomButton.addEventListener('click', e => getRandomResult(e))

function getRandomResult(e) {
  e.preventDefault()
  fetch('http://localhost:3000/results/random')
    .then(resp => resp.text())
    .then(searchResult => document.getElementById('searchText2').innerHTML = searchResult)
    .then(window.open('http://localhost:3000/results/random'))
}
