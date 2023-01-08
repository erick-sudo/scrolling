

//When the DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelector("#pages-wrapper")
    createDivs(pages, 10)

    $(".arrowRight").click( event => {
        slideElements(pages, 205, 1)
    })
    $(".arrowLeft").click( event => {
        slideElements(pages, 205, -1)
    })

    let d = 1
    let previous = 0
    let dir = true
    const interval = setInterval(() => {
        dir ? d = 1 : d = -1
        slideElements(pages, 1, d)
        if(previous === pages.scrollLeft) {
            dir = !dir
        }
        previous+=d
    },100)

    //console.log(document.body.offsetLeft,pages.parentElement.offsetLeft,pages.offsetLeft,Array.from(pages.children)[0].offsetLeft)
})

function createImage(url) {
    let img = document.createElement("img")
    img.setAttribute("src", url)
    img.classList.add("images")

    return img
}

function createDivs(parent, numberOfDivs) {
    for(let i=0;i<numberOfDivs;i++) {
        const div = document.createElement("div")
        div.classList.add("pages")
        div.style.backgroundColor = getRandomColor()
        div.setAttribute("id", `page${i}`)

        div.appendChild(createImage("https://cdn.pixabay.com/photo/2020/03/22/16/38/metro-4957736_960_720.jpg"))

        parent.appendChild(div)
    }
}

function getRandomColor() {
    return `rgba(${getRandomStain()},${getRandomStain()},${getRandomStain()},0.5)`
}

function slideElements(parent, direction, pixels) {
    parent.scrollBy({
        top: 0,
        left: direction*pixels,
        behaviour: 'smooth'
    })
}

const getRandomStain = () => (Math.random()*1000)%255