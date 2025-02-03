const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  '¿Oe que? ¿Como vas a decir que no?',
  'Apreta el otro boton amor',
  'Amooor >:c, el otro boton',
  'Oe, no seas asi p, apreta el otro',
  'Amoooooooooooor >:c',
  '¿No me quieres :c?',
  'Amorcitooo, el otro boton >:c',
  'Oe, el otro boton xd',
  'Me wa enojar ah >:c',
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]

})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
