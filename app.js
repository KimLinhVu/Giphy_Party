const form = document.querySelector('.search')
const input = document.querySelector('.input')
const results_div = document.querySelector('.results')
const api_key = "55hhPS3sSZDvYFrWRpCHeS8fTutClh8J"


function displayResults(gifs){
    gifs.forEach((gif) => {
        results_div.innerHTML += `
        <img src="${gif.images.original.url}" >
        `
    })
}

async function fetchGifs(search){
    const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`)
    const data = await res.json()
    console.log(data.data)
    displayResults(data.data)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let search = input.value
    console.log(search)
    fetchGifs(search)
})
