const form = document.querySelector('.search')
const input = document.querySelector('.input')
const results_div = document.querySelector('.results')
const api_key = "55hhPS3sSZDvYFrWRpCHeS8fTutClh8J"
const load_more = document.getElementById('load-more-btn')

var page = 1
var limit = 10
var search = null


function displayResults(gifs){
    gifs.forEach((gif) => {
        results_div.innerHTML += `
        <img src="${gif.images.original.url}" >
        `
    })
    input.value = ``
    load_more.classList.remove('hidden')
}

async function fetchGifs(search, offset){
    const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${limit}&offset=${offset}`)
    const data = await res.json()
    console.log(data.data)
    displayResults(data.data)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    results_div.innerHTML = ``
    page = 0
    search = input.value
    console.log(search)
    fetchGifs(search, (page++)*limit)
})

function showMore(){
    fetchGifs(search, (page++)*limit)
}

load_more.addEventListener('click', showMore)