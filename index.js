

//When the DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelector("#pages-wrapper")
    createDivs(pages, 20)

    pages.addEventListener('click', event => {
        slideElements(event.target)
    })
})

function createDivs(parent, numberOfDivs) {
    for(let i=0;i<numberOfDivs;i++) {
        const div = document.createElement("div")
        div.classList.add("pages")
        div.style.backgroundColor = getRandomColor()
        div.setAttribute("id", `page${i}`)

        parent.appendChild(div)
    }
}

function getRandomColor() {
    return `rgba(${getRandomStain()},${getRandomStain()},${getRandomStain()},0.7)`
}

function slideElements(parent) {
    parent.scrollBy({
        top: 0,
        left: 205,
        behavior: 'smooth'
    })
    // Array.from(parent.children).map(childElement => {
    //     childElement.scrollBy(100,0)
    // })
}

const getRandomStain = () => (Math.random()*1000)%255