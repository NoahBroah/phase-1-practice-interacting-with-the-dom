let counter = document.querySelector('#counter')
plusButton()
minusButton()
liker()
pauseButton()

const timer = setInterval(() => {
    counter.innerText ++
}, 1000)


function minusButton() {
    const minus = document.querySelector('#minus')
    minus.addEventListener('click',() => {
        counter.innerHTML --
    })
}

function plusButton() {
    const plus = document.querySelector('#plus')
    plus.addEventListener('click',(e) => {
        counter.innerHTML ++
    })
}

function liker() {
    const like = document.querySelector('#heart')
    like.addEventListener('click',(e) => {
        let likesList = document.querySelector('.likes')
        const li = document.createElement('li')
        likesList.append(li)
        li.innerText = counter.innerText
        li.className = `${li.innerText}`
        if (li.classList.value === li.innerText) {
            // li++
        }
        console.log(li.classList.value)
    })

}

function pauseButton() {
    const pause = document.querySelector('#pause')
    pause.addEventListener('click',(e) => {
        clearInterval(timer)

    })
}


function paused() {

}