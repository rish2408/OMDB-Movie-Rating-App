let api_key = "41bfffe9"
let id;
let result = document.getElementById("result")

async function search(query) {
    let link = `https://www.omdbapi.com/?s=${query}&apikey=${api_key}`
    let res = await fetch(link)
    let data = await res.json()
    displayData(data.Search)
    // console.log(data.Search)
}

function main() {
    let query = document.getElementById("search-box").value
    // console.log(query)
    search(query)
}


function displayData(movie) {
    if (movie == undefined) {
        return false
    }
    console.log(movie)
    result.innerHTML = null
    movie.forEach(function (el) {
        // console.log(el)
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        card.addEventListener("click",function(){
            showData(el)
        })
        let p = document.createElement("p")
        p.setAttribute("class", "p")
        p.innerText = el.Title     
        let image = document.createElement("img")
        image.setAttribute("class", "image")
        image.src = el.Poster
        image.alt = "Poster Not Available"
        // console.log(p)
        card.append(image, p)
        result.append(card)
    })
}
function debounce(fun, delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        fun()
    }, delay)
}
function showData(ele){
    result.innerHTML=null
    let picture=document.getElementById("display_box")
    picture.innerHTML=null
    let div=document.createElement("div")
    div.setAttribute("class","select")
    let poster=document.createElement("div")
    poster.setAttribute("class","top")
    let content=document.createElement("div")
    content.setAttribute("class","bottom")
    let photo=document.createElement("img")
    photo.src=ele.Poster
    photo.setAttribute("class","photo")
    let name=document.createElement("h3")
    name.setAttribute("class","name")
    name.innerText=`Movie Name - ${ele.Title}`
    let year=document.createElement("h3")
    year.innerText=`Year of release - ${ele.Year}`

    content.append(name,year)
    poster.append(photo)
    div.append(poster,content)
    picture.append(div)
    
}
    