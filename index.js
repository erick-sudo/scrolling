

//When the DOM content fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelector("#pages-wrapper")
    createDivs(pages, 20)

    $(".arrowRight").click( event => {
        slideElements(pages, 1)
    })
    $(".arrowLeft").click( event => {
        slideElements(pages, -1)
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

function slideElements(parent, direction) {
    //parent.scroll(100,0)
    //     top: 0,
    //     left: 205,
    //     behavior: 'smooth'
    // })

    console.log(parent.scrollLeft)
    parent.scrollLeft+=(direction*205)
}

const getRandomStain = () => (Math.random()*1000)%255