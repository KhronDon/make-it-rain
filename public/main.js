const qs = s => document.querySelector(s)
const qsa = s => document.querySelectorAll(s)
const FPS = 30
const SPEED = 2

/* CreateDrop function:
Create a new drop
Append it to the drops container */
const makeItRain = () => {
  const main = qs('.drops ')
  const drop = document.createElement('img')
  drop.src = 'https://tiy-learn-content.s3.amazonaws.com/2a47098b-droplet.svg'
  drop.height = 24
  drop.style.left = Math.floor(Math.random() * document.body.clientWidth) + 'px'
  drop.style.top = Math.floor(Math.random() * 20) + 'px'
  main.appendChild(drop)
}

const animate = () => {
  const main = qs('.drops ul')
  for (let drop of main.children) {
    const x = Number(drop.style.left.split('px')[0])
    const y = Number(drop.style.top.split('px')[0])
    if (y < document.body.clientHeight) {
      drop.style.top = (y + SPEED) + 'px'
    } else {
      main.removeChild(drop)
    }
  }
}

/* const drop = () => {
  qs('button').addEventListener('click', createDrop)
  const li = document.createElement('li')
  setInterval(() => {
    li.style.top = '0px'
  }, 1000)
  const animate = () => {
    li.style.top =
    `qsa{parseInt(li.style.top) + 1}px`
  }
}

/* Animate function:
For every drop in the drops container,
Increase it's 'top' property */
setInterval(animate, 16.66)

/* Main function:
When a button is clicked, call CreateDrop function
At an interval, call Animate function */
const main = () => {
  const button = qs('button')
  button.addEventListener('click', (event) => {
    makeItRain()
  })

  window.setInterval(animate, 1000 / FPS)
}

/* When document is ready, call Main function */
document.addEventListener('DOMContentLoaded', main)
