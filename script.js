const container = document.getElementById('container')

const colors = ['#AB274F', '#FF0800', '#FF4F00', '#FDEE00', '#00FFBF', '#0FFFFF', '#00B9E8', '#8A2BE2', '#FF91AF', '#F2F3F4']

const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))

square.addEventListener('mouseout', () => removeColor(square))

container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}