
let container = document.getElementById("container")


fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then (data => {
    data.results.forEach(element => {
        let img = document.createElement("img")
        let name = document.createElement("h4")
        let div = document.createElement("div")
        container.appendChild(div)
        div.appendChild(name)
        div.appendChild(img)
      
        div.classList.add("card")
        img.setAttribute("src", element.image)
        name.innerText=element.name
  
        
    });
})

